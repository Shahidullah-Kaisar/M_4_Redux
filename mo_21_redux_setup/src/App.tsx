import { decrement, increment } from "./redux/features/counter/counterSlice"
import './app.css'
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {

  const dispatch = useAppDispatch()
  const counter = useAppSelector( (state) => state.counter)
  console.log(counter)
  // const {count} = useSelector( (state) => state.counter)
  

  const handleIncrement = (amount: number) =>{
    dispatch(increment(amount));
  }
   const handleDecrement = () =>{
    dispatch(decrement());
  }

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <div>{counter.count}</div>
      {/* <div>{count}</div> */}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
