import fetch from 'node-fetch'

const profileApi = 'https://api.rune.farm'

const cache = {
  getUserAddressByUsername: {},
  getUsername: {},
}

export default async (name: string): Promise<string> => {
  try {
    if (cache.getUserAddressByUsername[name]) return cache.getUserAddressByUsername[name]

    const response = await fetch(`${profileApi}/users/${name}`).catch(() => {})

    if (!response || !response.ok) {
      return ''
    }

    // @ts-ignore
    const username = await response.text()

    cache.getUserAddressByUsername[name] = username

    return username
  } catch (error) {
    return ''
  }
}
