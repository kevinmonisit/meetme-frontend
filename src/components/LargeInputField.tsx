/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import { TextField, withStyles } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";


function LargeTextField(props: { classes: any; }) {
  const { classes } = props;

  return (
    <TextField
      label='Custom CSS'
      variant='outlined'
      id='custom-css-outlined-input'
    />
  );
}

export default LargeTextField;
