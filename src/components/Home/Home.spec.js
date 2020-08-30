import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "./Home";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe("<Header />", () => {
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
