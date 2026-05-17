import { useState } from "react";

export default function Counter() {
  // let arr = useState()
  // console.log(arr);
  // let [stateVariable, setStateVariable] = useState(10);
  let [count, setCount] = useState(0);
  let incCount = () => {
    setCount(count+1); // this will trigger re render
    console.log(count);
    // console.log(`inside incCount, count = ${count}'); this is beofre re-render
    // callback
// setCount((currCount) => { this will line wise exicute  the the code
//  return currCount + 1;
// });              
  };
  return (
    <div>
      <h3>Counter={count}</h3>
      <button onClick={incCount}>Increce Count</button>
    </div>
  );
}
