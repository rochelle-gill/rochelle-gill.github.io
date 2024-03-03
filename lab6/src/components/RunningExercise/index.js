import React, { useState } from 'react';

function RunningExercise({ name }) {
  const [lapTimes, setLapTimes] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    setIsActive(!isActive);
    if (!isActive) {
      // Start the timer
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  };

  const handleLap = () => {
    setLapTimes([...lapTimes, timer]);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(0);
    setLapTimes([]);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
      <button onClick={handleLap} disabled={!isActive}>
        Lap
      </button>
      <button onClick={handleReset}>Reset</button>
      <div>
        <h3>Lap Times:</h3>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>{formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;


