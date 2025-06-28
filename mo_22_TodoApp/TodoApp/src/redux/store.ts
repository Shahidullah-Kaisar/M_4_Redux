import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice' //alias name ------> counterReducer
import taskReducer from './features/task/taskSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: taskReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch