import React, { useState, useRef } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const countRef = useRef(null);

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      countRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsActive(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${getMilliseconds}`;
  };

  return (
    <div className="stopwatch">
        <h1>Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={handleStart} disabled={isActive}>Start</button>
        <button onClick={handleStop} disabled={!isActive}>Stop</button>
        <button onClick={handleReset} disabled={isActive}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;