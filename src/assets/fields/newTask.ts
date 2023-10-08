import { StatusTypes, PriorityTypes } from "@/models/createTask";
export default [
  {
    element: "textField",
    title: "Task title",
    vModel: "title",
    type: "text",
    icon: "fas fa-pencil",
  },
  {
    element: "select",
    title: "Assignee User",
    vModel: "assignee",
    acceptedValues: [""] as string[],
    icon: "fas fa-user",
  },
  {
    element: "select",
    title: "Status",
    vModel: "status",
    acceptedValues: StatusTypes,
    icon: "fas fa-bars-progress",
  },
  {
    element: "select",
    title: "Priority",
    vModel: "priority",
    acceptedValues: PriorityTypes,
    icon: "fas fa-arrow-up-wide-short",
  },
  {
    element: "textArea",
    title: "Description",
    vModel: "description",
    icon: "fas fa-circle-info",
  },
  {
    element: "datePicker",
    title: "DeadLine Date",
    vModel: "deadline",
    icon: "",
  },
];
