import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Dashboard from '../components/dashboard';

describe('dashboard.js', () => {
  test('Test for initial state', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);

    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});
