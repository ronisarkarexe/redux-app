import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <br />
      {count < 0 ? <span>0</span> : <span>{count}</span>}

      <br />
      <button
        onClick={() => dispatch(decrement())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment By 5
      </button>
    </div>
  );
}

export default App;
