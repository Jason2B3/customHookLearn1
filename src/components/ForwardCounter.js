import { useState, useEffect } from "react";
import useCounter from "../hooks/use-Counter" // import the hook file's default export
import Card from "./Card";

const ForwardCounter = () => {
  const counterValue= useCounter(true)
  return <Card>{counterValue}</Card>;
};

export default ForwardCounter;
