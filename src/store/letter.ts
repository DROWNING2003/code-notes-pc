import { defineStore } from 'pinia'
import API from '@/common/api'
import { get } from '../common/apiService';
export const useStore = defineStore('letter', {
    state: () => ({
        letter: {
            title:"",
            pro:"",
            wish:"",
            message: "",
            name: "",
            email: "",
            date: 0
        }
    }),
    getters: {},
    actions: {
        // 发送
        async send(args: any): Promise<any> {
            return await API.sendmsg(args)
        },
        // 获取
        async get(args: any): Promise<any> {
            return await API.getmsg(args).then((res)=>{
                this.letter=res.data
            })
        },
    }
})
