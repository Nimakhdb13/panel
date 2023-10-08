export const StatusTypes = [
  "backlog",
  "in-progress",
] as const;
type StatusType = (typeof StatusTypes)[number];

export const PriorityTypes = [
  "low",
  "medium",
  "high",
  "highest",
] as const;
type PriorityTypes = (typeof PriorityTypes)[number];

export interface CreateTask {
  title: string;
  assignee: string;
  deadline: string;
  status: StatusType;
  priority: PriorityTypes;
  description: string;
}
