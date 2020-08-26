import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
});

describe('<LoginForm />', () => {
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a username field', () => {
    expect(wrapper.find('input[type="username"]').length).toEqual(1);
    expect(wrapper.find('input[type="username"]').prop('value')).toEqual('');
  });

  it('should have a password field', () => {
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
    expect(wrapper.find('input[type="password"]').prop('value')).toEqual('');
  });
});
