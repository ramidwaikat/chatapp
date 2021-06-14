import React, { Component  } from "react";
import Image from "./image";

class Panel extends Component {


  render() {
    const style = this.props.showMe ? "panel  show-panel" : "panel hide-panel";

    return (
      <div className="btn-cont">
     
        <div className={style}>
          <p>Your Name </p>
          <p>Age </p>

          <Image image="/images/user.jpg" width="100px" height="100px" />
        </div>
      </div>
    );
  }
}

export default Panel;
