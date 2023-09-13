import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
export class BaseApiService {
    private api: AxiosInstance
    protected authorize: boolean = true
  
    public constructor() {
      this.api = axios.create()
      this.api.defaults.baseURL = import.meta.env.VITE_API_URL_
    }

    public get(url: string){

    }
}