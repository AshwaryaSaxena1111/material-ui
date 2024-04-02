import './App.css';
import React from 'react';
import TypoGraphy from "./components/Typography"
import Buttons from './components/Buttons';
import Checkboxs  from "./components/CheckBox";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './store/slices/counterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.counter);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <TypoGraphy />
      <Buttons />
      <Checkboxs />
    </div>
  );
}

export default App;
