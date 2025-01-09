import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/Slices/CounterSlice'; // Assuming you have actions like increment and decrement in your counter slice.

const Counter = () => {
  const count = useSelector((state) => state.counter.value);//state ko access krna ho toh useSelector
  const dispatch = useDispatch(); //function ko acces krna ho toh useDispatch

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
