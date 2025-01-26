import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to manage a timer.
 *
 * @param {boolean} [autoStart=true] - Whether the timer should start automatically
 * @returns {Object} The timer state and control functions
 */
export function useTimer(autoStart = true) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(autoStart);
  const interval = useRef();

  useEffect(() => {
    // Clear the interval if the timer is not running
    if (!isRunning && interval.current) {
      clearInterval(interval.current);
      return;
    }

    // Start the interval if the timer is running
    if (isRunning) {
      interval.current = setInterval(
        () => setSeconds((seconds) => seconds + 1),
        1000
      );

      // Clear the interval on cleanup
      return () => clearInterval(interval.current);
    }
  }, [isRunning]);

  /**
   * Resets the timer to 0 and starts it.
   */
  const reset = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  return {
    timerSeconds: seconds,
    isTimerRunning: isRunning,
    setIsTimerRunning: setIsRunning,
    resetTimer: reset,
  };
}
