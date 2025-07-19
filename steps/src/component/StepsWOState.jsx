import React from 'react'
import { messages } from '../constant';

const StepsWOState = () => {
  const step = 1;
  function handlePrevious() {
    alert("clicked on previous")
  }
  // using onClick event listner we can trigger a function by which we can do some work
  // we do not call method we just define it 
  function handleNext() {
    alert("clicked on next")
  }


  return(
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">Step {step}: {messages[step - 1]}</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff'}} onClick={handlePrevious}>Previous</button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default StepsWOState