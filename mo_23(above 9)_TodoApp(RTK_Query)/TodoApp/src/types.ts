export interface ITask {
  _id: string
  title: string
  description: string
  dueDate: string
  isCompleted: boolean
  priority: "high" | "medium" | "low",
}

