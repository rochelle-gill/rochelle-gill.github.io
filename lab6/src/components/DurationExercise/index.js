import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.05); // Increase timer by 0.05 seconds
      }, 50); // Update timer every 50 milliseconds
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTimer(0);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      seconds.toFixed(2)
    ).padStart(5, "0")}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={handleStartStop}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DurationExercise;

