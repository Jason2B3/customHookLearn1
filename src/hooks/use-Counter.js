import React, { useState, useEffect } from "react";

function useCounter(arrowFN) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //# The arrow function changing the counter state is now given as a parameter
      setCounter(arrowFN);
    }, 1000);
    return () => clearInterval(interval);
  }, [arrowFN]); // arrowFN is a prop, so we add it as a dependency

  return counter; // return a flat value from our hook
}
export default useCounter;
