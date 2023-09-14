import { BaseApi } from "@/plugins/axios";
export class AuthApi extends BaseApi {
  authorize = false;
  async signup(userData: object) {
    const response = await this.post("/users/signup", userData);
    return response?.data;
  }

  async login(userData: object) {
    const response = await this.post("/users/login", userData);
    return response?.data;
  }
}
