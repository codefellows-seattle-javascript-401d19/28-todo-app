import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Dashboard from '../components/dashboard';

describe('dashboard', () => {
  describe('initial state', () => {
    test(' -- contains notes as an empty array', () => {
      let mountedDashboard = mount(<Dashboard />);

      expect(mountedDashboard.state('notes')).toEqual([]);
    });
  });
});