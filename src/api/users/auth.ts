import { BaseApi } from "@/plugins/axios";
export class AuthApi extends BaseApi {
  async signup(userData: object) {
    const response = await this.post("/users/signup/", userData);
    return response?.data;
  }
}
