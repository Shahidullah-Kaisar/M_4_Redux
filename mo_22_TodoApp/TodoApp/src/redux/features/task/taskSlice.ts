import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: []
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DraftTask): ITask =>{
  return { id: nanoid(), isCompleted: false, ...taskData};
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {

      const taskData: ITask = createTask(action.payload);
      state.tasks.push(taskData);
    },

    toggleCompleteState: (state, action: PayloadAction<string>) =>{
      console.log(action)
      state.tasks.forEach((task) => {
        task.id === action.payload ? (task.isCompleted =! task.isCompleted) : task
      })
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter( (task) => task.id != action.payload)
    }

  },

});

export const selectTasks = (state: RootState) => {  //for showing data in ui
  return state.todo.tasks; //todo holo reducer er naam
};

console.log("taskSlice", taskSlice)

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
console.log("addTask",addTask)


export default taskSlice.reducer;
