import React, { useState, useCallback } from "react";
import "./index.scss";

const HEADING = "counter";
const BUTTON_NAME_MINUS = "minus";
const BUTTON_NAME_PLUS = "plus";

function App() {
  const [count, setCount] = useState<number>(0);

  const onClickMinus = useCallback(
    () => setCount((prev: number) => (prev !== 0 ? prev - 1 : prev)),
    []
  );

  const onClickPlus = useCallback(
    () => setCount((prev: number) => prev + 1),
    []
  );

  return (
    <div className="App">
      <div>
        <h1>{HEADING}:</h1>
        <div className="count">{count}</div>
        <div>
          <button className="minus" onClick={onClickMinus}>
            - {BUTTON_NAME_MINUS}
          </button>
          <button className="plus" onClick={onClickPlus}>
            {BUTTON_NAME_PLUS} +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
