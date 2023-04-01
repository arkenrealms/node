import md5 from 'js-md5'
import _Web3 from 'web3'
import HDWalletProvider from '@truffle/hdwallet-provider'
import { log, logError } from '.'

// const fetchPrice = async (id, vs = 'usd') => {
//   const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs}`)

//   return parseFloat((await response.json())[id][vs])
// }
// const fetchPrices = async () => {
// const response = await fetch('https://api.coingecko.com/api/v3/coins/list')
// prices = (await response.json())
// }

export const Web3 = _Web3

export const getRandomProvider = (secret) => {
  return new HDWalletProvider(
    secret.mnemonic,
    process.env.PROVIDER_URI //networks[Math.floor(Math.random() * networks.length)]
  )
}

export async function iterateBlocks(app, name, address, fromBlock, toBlock, event, processLog, updateConfig) {
  if (!toBlock) return
  if (fromBlock === toBlock) return

  // event List(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
  // event Update(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
  // event Delist(address indexed seller, uint256 tokenId);
  // event Buy(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
  // event Recover(address indexed user, address indexed seller, uint256 tokenId);

  try {
    const toBlock2 = fromBlock + 5000 < toBlock ? fromBlock + 5000 : toBlock

    const filter = {
      address,
      fromBlock,
      toBlock: toBlock2,
      topics: event.topics,
    }

    log(name, 'Iterating block', fromBlock, 'to', toBlock2, 'eventually', toBlock, 'for', event.topics)

    const logs = await app.ethersProvider.getLogs(filter)

    for (let i = 0; i < logs.length; i++) {
      await processLog(logs[i], false)
    }

    // await wait(3 * 1000)

    if (updateConfig && toBlock2 > 0) {
      await updateConfig(toBlock2)
    }

    await iterateBlocks(app, name, address, toBlock2, toBlock, event, processLog, updateConfig)
  } catch (e) {
    logError('Iterate Blocks Error', e)
    logError(name, address, fromBlock, toBlock, event)
    // process.exit(1)
  }
}

export const getAddress = (address) => {
  const mainNetChainId = 56
  const chainId =
    typeof window !== 'undefined' && window?.location?.hostname === 'testnet.rune.game'
      ? 97
      : process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export function isValidRequest(web3, req) {
  log('Verifying', req)
  try {
    const hashedData = md5(JSON.stringify(req.data))
    return (
      web3.eth.accounts.recover(req.signature.data, req.signature.hash).toLowerCase() ===
        req.signature.address.toLowerCase() && hashedData === req.signature.data
    )
  } catch (e) {
    logError(e)
    return false
  }
}

export async function getSignedRequest(web3, secret, data) {
  log('Signing', data)
  try {
    const hashedData = md5(JSON.stringify(data))
    return {
      address: secret.address,
      hash: (await web3.eth.accounts.sign(hashedData, secret.key)).signature,
      data: hashedData,
    }
  } catch (e) {
    logError(e)
    return null
  }
}

export function getTopicSignatureHex(web3, topicSignature) {
  return web3.eth.abi.encodeFunctionSignature(topicSignature)
}
