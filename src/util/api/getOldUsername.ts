import fetch from 'node-fetch'

const profileApi = 'https://api.rune.farm'

const cache = {
  getUserAddressByUsername: {},
  getUsername: {},
}

export default async (address: string): Promise<string> => {
  try {
    if (cache.getUsername[address]) return cache.getUsername[address]

    const response = await fetch(`${profileApi}/users/${address}`)

    if (!response.ok) {
      return ''
    }

    const { username = '' } = await response.json()

    cache.getUsername[address] = username

    return username
  } catch (error) {
    return ''
  }
}
