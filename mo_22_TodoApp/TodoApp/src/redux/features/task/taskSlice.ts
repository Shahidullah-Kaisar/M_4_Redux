import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "123",
      title: "Init Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
    {
      id: "124",
      title: "Init Backend",
      description: "Setup backend server and database",
      dueDate: "2025-12",
      isComplete: false,
      priority: "High",
    },
    {
      id: "125",
      title: "Auth Module",
      description: "Implement login and registration system",
      dueDate: "2026-01",
      isComplete: false,
      priority: "Medium",
    },
    {
      id: "126",
      title: "Dashboard UI",
      description: "Design and develop dashboard interface",
      dueDate: "2026-02",
      isComplete: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {  //for showing data in ui
  return state.todo.tasks; //todo holo reducer er naam
};

export default taskSlice.reducer;
