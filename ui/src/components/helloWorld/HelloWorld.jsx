import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleName = this.handleName.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
  }

  handleName(event) {
    console.log("handleName");
    this.setState({
      name: event.target.value
    });
  }

  displayAlert(event) {
    console.log("displayAlert");
    alert("Hello World " + this.state.name + "!");
  }

  render() {
    return (
      <div>
        <TextField value={this.state.name} onChange={this.handleName} />
        <Button variant="contained" color="primary" onClick={this.displayAlert}>
          Hello World
        </Button>
      </div>
    );
  }
}

export default Welcome;
