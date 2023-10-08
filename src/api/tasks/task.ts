import { BaseApi } from "@/plugins/axios";
import type { CreateTask } from "@/models";
export class TaskApi extends BaseApi {
  baseUrl = '/tasks/' 

  async createTask(task: CreateTask) {
    const response = await this.post(this.baseUrl, task)
    return response?.data
  }
}
