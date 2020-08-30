import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });

  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a form", () => {
    expect(wrapper.find("form")).toBeTruthy();
  });

  it("should have a username field", () => {
    expect(wrapper.find('input[type="username"]').length).toEqual(1);
    expect(wrapper.find('input[type="username"]').prop("value")).toEqual("");
  });

  it("should have a password field", () => {
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
    expect(wrapper.find('input[type="password"]').prop("value")).toEqual("");
  });
});
