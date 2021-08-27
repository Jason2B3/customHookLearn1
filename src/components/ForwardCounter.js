import { useState, useEffect } from "react";
import useCounter from "../hooks/use-Counter"; // import the hook file's default export
import Card from "./Card";

const ForwardCounter = () => {
  const counterValue = useCounter((prevState) => {
    return prevState + 10; // increment upwards by 10
  });
  return <Card>{counterValue}</Card>;
};

export default ForwardCounter;
