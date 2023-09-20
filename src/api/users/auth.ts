import { BaseApi } from "@/plugins/axios";
export class AuthApi extends BaseApi {
  authorize = false;
  baseUrl = '/users/' 
  async signup(userData: object) {
    const response = await this.post(this.baseUrl + "signup", userData);
    return response?.data;
  }

  async login(userData: object) {
    const response = await this.post(this.baseUrl + "login", userData);
    return response?.data;
  }
}
