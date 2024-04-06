
import { get,outget, post,baseURL } from '@/common/apiService'
export default {
  //发送letter
	sendmsg: (data: any) => {
		return post(`${baseURL}/write`,data,false);
	},
  //获取
	getmsg: (data: any) => {
		return post(`${baseURL}/get`,data,false);
	},
  //发送验证码
  sendcode: (data: any) => {
		return post(`${baseURL}/v1/user/sendcode`,data,false);
	},
  //获取账号信息
	get_account: (data: any) => {
		return post(`${baseURL}/app-getaccount`,data,false);
	},
  //获取诗句
  get_poem: () => {
		return outget(`https://v1.jinrishici.com/all`,{},false);
	},
}
