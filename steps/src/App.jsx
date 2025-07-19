import { useState } from "react";
import StepsWithState from "./component/StepsWithState";
import StepsWOState from "./component/StepsWOState";
import TimerChallange from "./component/TimerChallange";

export default function App () {
  const [isOpen, setIsOpen] = useState(true);
  // return <StepsWOState />
  return (
    <>
      <button className="close" onClick={() => setIsOpen(is => !is)}>&times;</button>
      {
        // isOpen && <StepsWithState />
        isOpen && <TimerChallange />
      }
    </>
  )
}