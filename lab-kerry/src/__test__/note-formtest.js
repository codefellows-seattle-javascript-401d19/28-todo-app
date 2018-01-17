import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../component/Dashboard';

describe('Dashboard', () => {
  test('Test for initial state', () => {
    let mountedDashboard = Enzyme.mount(<NoteForm />);

    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});