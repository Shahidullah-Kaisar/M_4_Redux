import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [],
  filter: "all"
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
    },
     
    updateFilter: (state, action: PayloadAction< "all" | "low" | "medium" | "high" >) =>{
      state.filter = action.payload;
    }

  },

  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) => task.assignedTo === action.payload ? (task.assignedTo = null) : task)
  });
}

});

export const selectTasks = (state: RootState) => {  //for showing data in ui

  const filter = state.todo.filter;

  if(filter === "low"){
    return state.todo.tasks.filter((task) => task.priority === "low");

  }else if(filter === "medium"){
    return state.todo.tasks.filter((task) => task.priority === "medium");

  }else if(filter === "high"){
    return state.todo.tasks.filter((task) => task.priority === "high");
    
  }else{
    return state.todo.tasks; //todo holo reducer er naam 
  }
  
  
};

console.log("taskSlice", taskSlice)

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;
console.log("addTask",addTask)


export default taskSlice.reducer;
