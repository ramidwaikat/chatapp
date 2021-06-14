import React, { useState } from "react";
import Header from "./header";
import Input from "./input";
import Body from "./body";
import { Context } from "./Context";

const Main = () => {
  const [context, setContext] = useState("");
  let lst = [
    { text: "Schedule an appointment", source: "user" },
    { text: "Schedule the appointment for the next week", source: "agent" },
    { text: "This was really helpful!", source: "user" },
    { text: "Great Service)", source: "user" },
    { text: "Thanks! :)", source: "agent" },
  ];

  return (
    <div className="main">
      <Header agentName="Agent Name" />
      <Context.Provider value={[context, setContext]}>
        <Body lst={lst}   />
        <Input lst={lst}   />
      </Context.Provider>
    </div>
  );
};
export default Main;
