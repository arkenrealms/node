export function dev(...props: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[ARKEN]`, props)
  }
}
