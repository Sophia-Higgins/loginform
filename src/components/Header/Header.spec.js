import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "./Header";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe("<Header />", () => {
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
