import React from "react";

const Message = (props) => {
  const style =
    props.source === "agent" ? "message message-agent" : "message message-user";
  return (
    <div>
      <div className={style}>{props.text}</div>
    </div>
  );
};
export default Message;
