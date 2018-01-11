import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoteForm from '../component/note-form';

Enzyme.configure({adapter: new Adapter()});

describe('NoteForm', () => {
  test('The initial state should have empty strings as title and content properties.', () => {
    let mountedDashboard = Enzyme.mount(<NoteForm />);

    expect(mountedDashboard.state('title')).toEqual('');
    expect(mountedDashboard.state('content')).toEqual('');
  });
});