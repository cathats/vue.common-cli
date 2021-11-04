/**
 * 扩展全局类型
 */
export {}
declare global {
  declare type Recordable<T = any> = Record<string, T>
}
