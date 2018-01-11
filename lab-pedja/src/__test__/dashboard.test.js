import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()});

import Dashboard from '../components/dashboard';
import NoteForm from '../components/note-form';

describe('Dashboard',() => {
  test('Simple test for initial state',() => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);

    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});

describe('NoteForm',() => {
  test('Simple test for initial state',() => {
    let mountedNoteForm = Enzyme.mount(<NoteForm />);

    expect(mountedNoteForm.state('title')).toEqual('');
  });
});