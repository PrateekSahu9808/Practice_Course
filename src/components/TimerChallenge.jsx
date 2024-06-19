import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  //for refs if you have a value that must be managed
  // but that isn't really a state
  // because that timer itself has no direct impact on the UI.
  const timer = useRef();
  const dialog= useRef();
  const [timerRemaining, setTimerRemaining] = useState(targetTime*1000);
  const timerIsActive =timerRemaining>0 && timerRemaining<targetTime*1000;
  if(timerRemaining <=0){
    clearInterval(timer.current);
  
    dialog.current.open();
  }
const handleReset=()=>{
  setTimerRemaining(targetTime*1000);
  }
  const handleStart = () => {

     timer.current = setInterval(() => {
      setTimerRemaining(prevTimeRemaining=>prevTimeRemaining-10);
  
    }, 10);
  
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
   <ResultModal ref={dialog} targetTime= {targetTime}  remainingTime={timerRemaining} onReset={handleReset}/>  
    <section className="challenge">
      <h2>{title}</h2>
      {/* {timeExpired && <p>you lost</p>} */}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "stop" : "start"} challenge
        </button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running⏲️ " : "Time inactive"}
      </p>
    </section>
    </>
  );
};

export default TimerChallenge;
