import { Get } from '../http/axios'
export default {
  test1: <T>(params: T): Promise<any> => Get<T>('https://www.baidu.com', params)
}
