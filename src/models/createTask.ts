export interface CreateTask {
  title: string;
  assignee: string;
  deadline: string;
  status: "backlog" | "in-progress";
  priority: "low" | "medium" | "high" | "highest";
  description: string;
}
