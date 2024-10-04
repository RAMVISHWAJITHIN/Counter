import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="box m-auto my-52 flex w-80 items-center justify-center md:w-9/12 lg:w-2/4">
      <div className="card text-center">
        <h1 className="text-black-900 my-8 text-5xl font-bold md:text-6xl">
          Counter
        </h1>
        <div className="my-9 text-6xl font-bold">
          <h2>{count}</h2>
        </div>
        <div className="my-20">
          <button
            className="mx-1 rounded-lg bg-green-700 p-3 text-white md:mx-5"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="mx-1 rounded-lg bg-gray-600 p-3 text-white md:mx-5"
            disabled={count === 0}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="mx-1 rounded-lg bg-red-600 p-3 text-white md:mx-5"
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
