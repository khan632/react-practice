/*
what is state ?
data are of two type in react one is props which is not handle inside the component but handle by parent
other one is state which is handle inside the component.

STATE: 1. Data tgat a component can hold over a time period, necessary for information that it needs to
          remember throughout the app life cycle.
       2. State is a component's memory.
       3. updating component state will cause the component to re-render.
       4. It persists local variables between rendering of components.

use of state:
state call with useState method with a default parameter which we pass to it and it will return array
array contain two value one is current data or default data and second is function to update the data.

example:
const [data, setData] = useState(defaultData);
data = value;
setData = method to update the data
state is a hook inside a react and it always calls on the top of the component
*/

import React, { useState } from 'react'
import { messages } from '../constant';

const StepsWithState = () => {
    // creation of useState
  const [step, setStep] = useState(1)
    function handlePrevious() {
      if(step > 1) {
        //updating the state
        setStep(step - 1)
      }
    }
    function handleNext() {
      if(step < 3) {
        setStep(step + 1)
      }
    }
  
  
    return(
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step === 3 ? "active" : ""}>3</div>
        </div>
  
        <p className="message">Step {step}: {messages[step - 1]}</p>
  
        <div className="buttons">
          <button style={{ backgroundColor: '#7950f2', color: '#fff'}} onClick={handlePrevious}>Previous</button>
          <button style={{ backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
        </div>
      </div>
    )
}

export default StepsWithState