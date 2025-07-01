import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
        id: "1",
        name: "Sajib",    
    }
  ],
};

type Draftuser = Pick<IUser, "name">

const createUser = (userData: Draftuser): IUser =>{
  return { id: nanoid(), ...userData};
}

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {

      const userData: IUser = createUser(action.payload);
      state.users.push(userData);
    },

    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter( (user) => user.id != action.payload)
    },

  },

});

export const selectusers = (state: RootState) => {  
    return state.user.users; 
}

export const { addUser, removeUser } = userslice.actions;

export default userslice.reducer;
