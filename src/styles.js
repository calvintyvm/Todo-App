import React, { Component } from "react";
import ReactDOM from "react-dom";

const styles = {
  color: "black",

  header: {
    color: "white",
    backgroundColor: "purple",
    width: "50%",
    margin: "0 auto"
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "0 auto",
    background: "grey"
  },
  list: {
    listStyleType: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px"
  },

  item: {
    borderBottom: "1px solid black",
    width: "50%",
    margin: "10px auto",
    padding: "10px"
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "0 auto"
  },
  footerItem: {
    marginTop: "10px",
    padding: "10px"
  },
  footerItem2: {
    marginTop: "10px",

    padding: "10px"
  }
};

export default styles;
