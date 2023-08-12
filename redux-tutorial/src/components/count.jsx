import { useAppDispatch, useAppSelector } from "../redux/hooks/index";
import { increment, decrement } from "../redux/slices/counter";

export const Counter = () => {
   const count = useAppSelector((state) => state.counter);
   const dispatch = useAppDispatch();
   return (
      <div>
         <button onClick={() => dispatch(increment())}>Increment</button>
         <h2>{count}</h2>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
   );
};
