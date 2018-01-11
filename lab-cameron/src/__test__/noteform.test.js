import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../components/noteform';

describe('noteform.js', () => {
  test('Test for initial state', () => {
    let mountedDashboard = Enzyme.mount(<NoteForm />);

    expect(mountedDashboard.state('id')).toBeTruthy();
    expect(mountedDashboard.state('title')).toEqual('');
    expect(mountedDashboard.state('content')).toEqual('');
    expect(mountedDashboard.state('editing')).toEqual(false);
    expect(mountedDashboard.state('complete')).toEqual(false);

  });
});
