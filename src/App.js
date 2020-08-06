import React from "react";
import "./styles.css";
import Curly from "./siblings/curly";
import Larry from "./siblings/larry";
import Moe from "./siblings/moe";
import useCounter from "./../src/use.counter";
import global from "./global";

export default function App() {
  global.counter = useCounter();
  return (
    <>
      <Larry />
      <Curly />
      <Moe />
    </>
  );
}
