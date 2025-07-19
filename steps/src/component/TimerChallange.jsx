import React, { useState } from "react";

/*
Challenge: 
Challenge contain 3 things:
one steps timers, second normal timer, third will show dates

if user increment or decrement normal time than the dates will also increment or decrement respectively.
if user increment or decrement steps timer than normal timer should increment multiple of steps timer and so dates.
*/

const TimerChallange = () => {
  const [stepTimer, setStepTimer] = useState(0);
  const [normalTimer, setNormalTimer] = useState(0);

  return (
    <div className="steps">
      <div className="timer">
        <button onClick={() => setStepTimer((s) => s + 1)}>&#43;</button>
        <span>Multiplier Timer: {stepTimer}</span>
        <button onClick={() => setStepTimer((s) => s - 1)}>&#8722;</button>
      </div>
      <DateRender normalTimer={normalTimer} />
      <div className="timer">
        <button
          onClick={() =>
            setNormalTimer((s) => s + (stepTimer !== 0 ? stepTimer : 1))
          }
        >
          &#43;
        </button>
        <span>Date Timer: {normalTimer}</span>
        <button
          onClick={() =>
            setNormalTimer((s) => s - (stepTimer !== 0 ? stepTimer : 1))
          }
        >
          &#8722;
        </button>
      </div>
    </div>
  );
};

export default TimerChallange;

function DateRender({ normalTimer }) {
    const date = new Date('july 19 2025');
        date.setDate(date.getDate() + normalTimer);
  return (
    <p className="message">
        <span>{normalTimer === 0 ? "Today is " : normalTimer > 0 ? `${normalTimer} days from today is` : `${Math.abs(normalTimer)} ago was`}</span>
      <span>{date.toDateString()}</span>
      
    </p>
  );
}
