type Func = (...args: any[]) => any

export default function debounce(func: Func, wait: number, immediate: boolean = false): Func {
  let timeout: NodeJS.Timeout | null = null
  let args: any
  let context: any
  let timestamp: number
  let result: any

  const later = () => {
    const last = Date.now() - timestamp

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args: any[]) {
    context = this
    timestamp = Date.now()
    const callNow = immediate && !timeout

    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

interface MenuItem {
  [key: string]: any
  children?: MenuItem[]
}

export function getMenuItemInMenuListByProperty(menuList: MenuItem[], key: string, value: any): MenuItem | undefined {
  let stack: MenuItem[] = [...menuList]
  let res: MenuItem | undefined

  while (stack.length) {
    const cur = stack.shift()!
    if (cur.children && cur.children.length > 0) {
      stack = cur.children.concat(stack)
    }
    if (value === cur[key]) {
      res = cur
      break
    }
  }

  return res
}

/**
 * @description 将时间戳转换为年-月-日-时-分-秒格式
 * @param {number} timestamp
 * @returns {string} 年-月-日-时-分-秒
 */
export function timestampToTime(timestamp: number): string {
  const date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1).toString().padStart(2, '0') + '-'
  const D = date.getDate().toString().padStart(2, '0') + ' '
  const h = date.getHours().toString().padStart(2, '0') + ':'
  const m = date.getMinutes().toString().padStart(2, '0') + ':'
  const s = date.getSeconds().toString().padStart(2, '0')

  return Y + M + D + h + m + s
}
