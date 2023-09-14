import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { config } from 'dotenv'
export class BaseApi {
    private api: AxiosInstance
    protected authorize: boolean = true
  
    public constructor() {
      this.api = axios.create()
      this.api.defaults.baseURL = import.meta.env.VITE_API_URL
    }

    public get(url: string){
      let config = {
        headers : {}
      } as AxiosRequestConfig
      return this.api.get(url, config).then(undefined)
    }

    public post(url: string, data: object){
      let config = {
        headers : {}
      } as AxiosRequestConfig
      console.log()
      return this.api.post(url, data, config).then(undefined)
    }



}