import React from "react";
import Image from "./image";

const Header = (props) => {
  return (
    <div className="header">
      <span className="agent-name">
        Hi{" "}
        <span>
          {" "}
          <strong>{props.agentName}</strong>{" "}
        </span>{" "}
      </span>
      <Image image="/images/agent.jpg" width="50px" height="50px" />
    </div>
  );
};
export default Header;
