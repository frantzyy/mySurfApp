import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import LaunchDetail from "./LaunchDetail";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class LaunchDetailDrawer extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.toggleDrawer("right", true)}>Open Right</Button>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <LaunchDetail launchID="2" />
          </div>
        </Drawer>
      </div>
    );
  }
}

// export default LaunchDetailDrawer;
export default withStyles(styles)(LaunchDetailDrawer);
