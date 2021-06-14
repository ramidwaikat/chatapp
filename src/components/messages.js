import React, { useContext } from "react";
import Message from "./message";
import { Context } from "./Context";

const Messages = (props) => {

  const style = props.showMe ? "messages  min-width" : "messages max-width";
  const [context, setContext] = useContext(Context);
  let val;
  if (context != null) {
    val = <Message text={context} source="agent" />;
    // setContext( "" );
  }
  
  const lstMessages = Object.keys( props.lst).map((msgKey) => {
    return <Message source={props.lst[msgKey].source} text={props.lst[msgKey].text}  key={msgKey}> </Message>;
  });
 
  return (
    <div className={style}>
      {/* <Message text="schedule an appointment" source="user" />
      <Message
        text="schedule the appointment for the next week"
        source="agent"
      />
      <Message text="This was really helpful!" source="user" />
      <Message text="Great Service)" source="user" />
      <Message text="Thanks! :)" source="agent" /> */}
      
     
      {lstMessages}
       {val}
    </div>
  );
};
export default Messages;
