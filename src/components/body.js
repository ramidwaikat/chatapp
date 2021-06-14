import React, { Component } from "react";
import Messages from "./messages";
import Panel from "./panel";

class Body extends Component {
  constructor() {
    super();

    this.state = {
      showMe: true,
      text: ">>",
    };
  }

  toggle = (event) => {
    this.state.showMe === true
      ? this.setState({ text: "<<" })
      : this.setState({ text: ">>" });
    this.setState((prevState) => ({
      showMe: !this.state.showMe,
    }));
  };
  render() {
 
    return (
      <div>
  <div className="body">
        <Messages showMe={this.state.showMe} lst={this.props.lst} />
        {/* <Button  showMe={this.state.showMe} /> */}
        <button className="toggle" onClick={this.toggle}>
          {this.state.text}
        </button>
        <Panel   showMe={this.state.showMe} />
      </div>

      </div>
    
    );
  }
}

export default Body;
