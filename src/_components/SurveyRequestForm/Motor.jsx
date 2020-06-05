
import React, { Component } from "react";
import { Paper, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class CommonView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const { classes } = this.props;
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    // const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
    return(
      <div>
        <Paper>Vehicle Information</Paper>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="outlined"
          />
        </div>
    );
  }
}

export default CommonView;
