import { Axios } from 'axios';
import axios from 'axios';
/*
 * @Author: zusheng
 * @Date: 2022-04-24 14:43:26
 * @LastEditTime: 2022-05-13 21:07:03
 * @Description:API服务
 * @FilePath: \uni-preset-vue-vite-ts\src\common\apiService.ts
 */

export const baseURL = 'https://bogbc4.lafyun.com:443'//apiURI
const sslVerify = false //ssl证书验证

// uni.addInterceptor('request', {
//   invoke(args) {
//     args.url = baseURL + args.url
//   }
// })

let token: any = ''

/**
 *
 * @param url url
 * @param params 参数
 * @param requireToken 是否手动传递token
 */
 export const outget = (
  url: string,
  params: any,
  requireToken?: boolean,
): Promise<any> => {
  return new Promise(resolve => {
    const data = params
    const uniReq: any = axios.request({
      url,
      data,
      method: 'GET',
    })
    uniReq
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}
export const get = (
  url: string,
  params: any,
  requireToken?: boolean,
): Promise<any> => {

  return new Promise(resolve => {
    const data = params
    // if (requireToken && token) data.token = encodeURIComponent(token)
    
    const uniReq: any = axios.request({
      url,
      data,
      method: 'GET',
    })
    uniReq
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}
export const post = (
  url: string,
  params: any,
  requireToken?: boolean,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const data = params
    // if (requireToken && token) data.token = encodeURIComponent(token)
    const uniReq: any = axios.request({
      url,
      data,
      method: 'POST',
    })
    uniReq
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        resolve(err)
      })
  })
}