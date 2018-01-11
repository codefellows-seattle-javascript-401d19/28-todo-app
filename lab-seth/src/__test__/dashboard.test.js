import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()});

import Dashboard from '../components/dashboard';

describe('Dashboard tests...', () => {
  test('Simple initial state test for proper setup', () => {
    let mockDashboard = Enzyme.mount(<Dashboard />);

    expect(mockDashboard.state('notes')).toEqual([]);
  });
});
