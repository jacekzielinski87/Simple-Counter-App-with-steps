import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="Counter">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span className="count">Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <div className="Steps">
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span className="step">Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
