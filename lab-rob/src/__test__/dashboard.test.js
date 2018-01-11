import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from '../component/dashboard';

Enzyme.configure({adapter: new Adapter()});

describe('Dashboard', () => {
  test('The initial state should have an empty notes array.', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);

    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});