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
      config = this.appendAuth(config)
      return this.api.get(url, config).then(undefined)
    }

    public post(url: string, data: object){
      let config = {
        headers : {}
      } as AxiosRequestConfig
      config = this.appendAuth(config)
      console.log()
      return this.api.post(url, data, config).then(undefined)
    }

    private appendAuth(config: AxiosRequestConfig){
      if (!this.authorize) return config
      const token = localStorage.getItem('token')
      if(config.headers)
        config.headers.Authorization = `Bearer ${token}`
      return config
    }
}