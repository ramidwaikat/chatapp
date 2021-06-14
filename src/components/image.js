import React from "react";

const Image = (props) => {
  return (
    <div  >
      <img
        className="img"
        height={props.height}
        width={props.width}
        src={require(`../../src${props.image}`).default}
        alt="user or agent pic"
      />
    </div>
  );
};
export default Image;
