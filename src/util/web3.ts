import md5 from 'js-md5'
import Web3 from 'web3'
import HDWalletProvider from "@truffle/hdwallet-provider"
import { log, logError } from '.'

// const fetchPrice = async (id, vs = 'usd') => {
//   const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs}`)

//   return parseFloat((await response.json())[id][vs])
// }
// const fetchPrices = async () => {
  // const response = await fetch('https://api.coingecko.com/api/v3/coins/list')
  // prices = (await response.json())
// }

let secret = {
  mnemonic: '',
  address: '',
  key: ''
}

export const setSecret = (_secret) => {
  secret = _secret
}

export const getRandomProvider = () => {
  return new HDWalletProvider(
    secret.mnemonic,
    "wss://thrumming-still-leaf.bsc.quiknode.pro/b2f8a5b1bd0809dbf061112e1786b4a8e53c9a83/" //"https://bsc.getblock.io/mainnet/?api_key=3f594a5f-d0ed-48ca-b0e7-a57d04f76332" //networks[Math.floor(Math.random() * networks.length)]
  )
}

// const blocknativeApiKey = '58a45321-bf96-485c-ab9b-e0610e181d26'


export async function iterateBlocks(app, name, address, fromBlock, toBlock, event, processLog, updateConfig) {
  if (!toBlock) return
  if (fromBlock === toBlock) return

  // event List(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
  // event Update(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
  // event Delist(address indexed seller, uint256 tokenId);
  // event Buy(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
  // event Recover(address indexed user, address indexed seller, uint256 tokenId);

  try {
    const toBlock2 = (fromBlock + 5000) < toBlock ? fromBlock + 5000 : toBlock

    const filter = {
      address,
      fromBlock,
      toBlock: toBlock2,
      topics: event.topics
    }

    log(name, 'Iterating block', fromBlock, 'to', toBlock2, 'eventually', toBlock, 'for', event.topics)

    const logs = await app.ethersProvider.getLogs(filter)

    for(let i = 0; i < logs.length; i++) {
      await processLog(logs[i], false)
    }

    // await wait(3 * 1000)
    
    if (updateConfig && toBlock2 > 0) {
      await updateConfig(toBlock2)
    }

    await iterateBlocks(app, name, address, toBlock2, toBlock, event, processLog, updateConfig)
  } catch(e) {
    logError('Iterate Blocks Error', e)
    logError(name, address, fromBlock, toBlock, event)
    // process.exit(1)
  }
}

export const getAddress = (address) => {
  const mainNetChainId = 56
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

let provider = getRandomProvider()

// @ts-ignore
export const web3 = new Web3(provider)

export function isValidRequest(req) {
  log('Verifying', req)
  try {
    const hashedData = md5(JSON.stringify(req.data))
    return web3.eth.accounts.recover(req.signature.data, req.signature.hash).toLowerCase() === req.signature.address.toLowerCase() && hashedData === req.signature.data
  } catch(e) {
    logError(e)
    return false
  }
}

export async function getSignedRequest(data) {
  log('Signing', data)
  try {
    const hashedData = md5(JSON.stringify(data))
    return {
      address: secret.address,
      hash: (await web3.eth.accounts.sign(hashedData, secret.key)).signature,
      data: hashedData
    }
  } catch (e) {
    logError(e)
    return null
  }
}