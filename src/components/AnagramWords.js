import React, { Component } from "react";

const organise = str => {
  return str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
};

export default class AnagramWords extends Component {}
