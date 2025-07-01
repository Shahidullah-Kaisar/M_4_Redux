export interface ITask {
  id: string
  title: string
  description: string
  dueDate: Date
  isCompleted: boolean
  priority: "high" | "medium" | "low",
  assignedTo?: string | null //null dewar karon holo jodi user assign na kori
}

export interface IUser {
  id: string,
  name: string
}