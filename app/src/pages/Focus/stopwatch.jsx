import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const imagePaths = [
  "/focus/1.jpg",
  "/focus/2.jpg",
  "/focus/3.jpeg",
  "/focus/4.jpg",
  "/focus/5.jpeg",
  "/focus/6.jpg",
  "/focus/7.jpg",
  "/focus/8.jpg",
];

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [bg_idx, setBgIdx] = useState(Math.floor(Math.floor(Math.random() * 8)));

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(centiseconds).padStart(2, "0")}`;
  };

  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-4 p-4 rounded-xl shadow-md h-full bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${imagePaths[bg_idx]})`,
      }}
    >
      <div className="flex flex-col justify-center items-center backdrop-blur-[10px] p-4 rounded-2xl">
        <h1 className="text-6xl font-mono">{formatTime(time)}</h1>
        <div className="flex justify-center items-center gap-2">
          {!isRunning ? (
            <button
              className="px-4 py-2 rounded-[50%]"
              onClick={() => setIsRunning(true)}
              disabled={isRunning}
            >
              <Play />
            </button>
          ) : null}
          {isRunning ? (
            <>
              <button
                className="px-4 py-2 rounded-[50%]"
                onClick={() => setIsRunning(false)}
                disabled={!isRunning}
              >
                <Pause />
              </button>
              <button
                className="px-4 py- rounded-[50%]"
                onClick={() => {
                  setTime(0);
                  setIsRunning(false);
                }}
              >
                <RotateCcw />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
