import React, {  useContext    } from "react";
import { Context } from "./Context";

const Input  =(props)=> {

  
   const [context, setContext] = useContext(Context);  
 

//   };
const handleKeypress = e => {

    //it triggers by pressing the enter key
  if (e.key === "Enter") {
     
    //  setValue(e.value);
          setContext(e.target.value );
        // setContext(prevValue=> [...prevValue , {"Text" :e.target.value  , "source" : 'agent'}]);
   
    //  e.target.input="";
  }
};
  
    return (

      <input
        className="input"
        placeholder="Type Something..."
        onKeyPress={handleKeypress}
         
      ></input>
    );
 
};

export default Input;
