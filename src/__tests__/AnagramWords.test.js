import React from "react";
import ReactDOM from "react-dom";
import AnagramWords from "../components/AnagramWords";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("Anagram Words", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<AnagramWords />);
    instance = wrapper.instance();
    instance.props = { userWord: "Alex" };
    instance.state = { fetchWords: ["toe", "act", "car", "cat"] };
  });

  test("#displayAnagramWords", () => {
    wrapper.find("button").simulate("click");
    expect(instance.state.anagramVisible).toEqual(true);
  });

  test("#organiseString", () => {
    expect(instance.organiseWord(instance.props.userWord)).toEqual("aelx");
  });

  test("#findAnagramWords", () => {
    instance.props = { userWord: "cat" };
    instance.findAnagramWords();
    expect(instance.state.anagrammedWords).toEqual(["act", "cat"]);
  });
});
