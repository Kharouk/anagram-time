import React from "react";
import ReactDOM from "react-dom";
import ChosenWord from "../components/ChosenWord";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

it("changes state when input is made", () => {
  const wrapper = shallow(<ChosenWord />);
  wrapper.find("input").simulate("change", { target: { value: "Banana" } });
  expect(wrapper.state("word")).toBe("Banana");
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChosenWord />, div);
  ReactDOM.unmountComponentAtNode(div);
});
