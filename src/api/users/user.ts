import { BaseApi } from "@/plugins/axios";
export class UserApi extends BaseApi {
  baseUrl = '/users/' 

  async getProfile() {
    const response = await this.get(this.baseUrl + "me")
    return response?.data
  }

  async getAllUsers() {
    const response = await this.get(this.baseUrl + "list")
    return response?.data
  }
}
