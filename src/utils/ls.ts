/**
 * Local storage wrapper
 * @param key - Local storage key
 */
export function ls<TValue>(key: string) {
  return {
    val: () => {
      const item = localStorage.getItem(key)
      if (item) return JSON.parse(item) as TValue
    },
    set: (value: TValue) => localStorage.setItem(key, JSON.stringify(value)),
    del: () => localStorage.removeItem(key),
  }
}
