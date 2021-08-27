import React, { useState, useEffect } from "react";

function useCounter(forwards) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //# Change the setCounter function depending on the forwards arg
      if (forwards) setCounter((prevCounter) => prevCounter + 1);
      if (!forwards) setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]); // forwards is a prop, so we add it as a dependency

  return counter; // return a flat value from our hook
}
export default useCounter;
