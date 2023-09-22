import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { useAlertsStore } from "@/stores/alert";
export class BaseApi {
  private api: AxiosInstance;
  protected authorize: boolean = true;
  public constructor() {
    this.api = axios.create();
    this.api.defaults.baseURL = import.meta.env.VITE_API_URL;
  }

  public get(url: string) {
    let config = {
      headers: {},
    } as AxiosRequestConfig;
    config = this.appendAuth(config);
    return this.api
      .get(url, config)
      .then(undefined)
      .catch(BaseApi.alertOnError);
  }

  public post(url: string, data: object) {
    let config = {
      headers: {},
    } as AxiosRequestConfig;
    config = this.appendAuth(config);
    return this.api
      .post(url, data, config)
      .then(undefined)
      .catch(BaseApi.alertOnError);
  }

  private appendAuth(config: AxiosRequestConfig) {
    if (!this.authorize) return config;
    const token = localStorage.getItem("token");
    if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  }

  public static alertOnError(reason: any): any {
    let alertStore = useAlertsStore();
    alertStore.type = "error";
    if (reason.response?.data?.detail.message) {
      alertStore.message = reason.response.data.detail.message;
    } else alertStore.message = "server error";
    alertStore.showAlert();
    throw reason;
  }
}
