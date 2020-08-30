import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe("<App />", () => {
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
