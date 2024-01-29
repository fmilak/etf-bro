import { signal } from "@preact/signals-react";

export const counter = signal(0);

const Counter = () => {

  const increment = () => {
    console.log('increment');
    console.log(counter.value);
    counter.value++;
    console.log(counter.value);
  }

  return (
    <div>
      <span>Counter: {counter}</span>

      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;