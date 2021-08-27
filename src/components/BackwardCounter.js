import { useState, useEffect } from "react";
import useCounter from "../hooks/use-Counter" // import the hook file's default export
import Card from "./Card";

const BackwardCounter = () => {
  const counterValue= useCounter(false)
  return <Card>{counterValue}</Card>;
};

export default BackwardCounter;
