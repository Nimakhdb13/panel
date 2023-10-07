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

  async changeRole(username: string, newRole: string ){
    const response = await this.patch(this.baseUrl + "change-role",{username, new_role: newRole})
    return response?.data
  }
}
