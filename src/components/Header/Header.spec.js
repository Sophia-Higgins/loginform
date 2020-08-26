import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Header from './Header';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

describe('<Header />', () => {
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
