import React from "react";
import ReactDOM from "react-dom";
import AnagramWords from "../components/AnagramWords";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnagramWords />, div);
  ReactDOM.unmountComponentAtNode(div);
});
