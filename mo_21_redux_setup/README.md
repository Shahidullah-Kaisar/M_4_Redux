
# ⚛️ React + Redux Toolkit + TypeScript Starter (Vite)

This project demonstrates a clean setup of Redux Toolkit with TypeScript using Vite as the build tool.

---

## 🛠 Steps to Setup

### 1️⃣ Create React App with Vite and TypeScript

```bash
npm create vite@latest
```

- Choose:
  - **Framework**: React
  - **Variant**: TypeScript

Then:

```bash
cd your-project-name
npm install
```

---

### 2️⃣ Install Redux Toolkit and React-Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 3️⃣ Create Folder Structure

Inside `src/`, create a folder named `redux/`:

```
src/
├── redux/
│   ├── store.ts
│   ├── hooks.ts
│   └── features/
│       └── counter/
│           └── counterSlice.ts
```

---

### 4️⃣ Setup the Redux Store

📄 `src/redux/store.ts`

```ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

---


### 5️⃣ Wrap Store with Provider

📄 `src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
```
---

### 6️⃣ Create Typed Hooks

📄 `src/redux/hooks.ts`

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```


---

### 7️⃣ Create Counter Slice

📄 `src/redux/features/counter/counterSlice.ts`

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

---



---

### 8️⃣ Use Redux in App

📄 `src/App.tsx`

```tsx
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement, incrementByAmount } from './redux/features/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}

export default App
```

---



