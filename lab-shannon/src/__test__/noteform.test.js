import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import NoteForm from '../components/noteform';


describe(`NoteForm`, () => {
  test(`testing note form's initial state`, () => {
    let mountedNoteForm = Enzyme.mount(<NoteForm />);

    expect(mountedNoteForm.state('content')).toEqual('');
    expect(mountedNoteForm.state('title')).toEqual('');
  });
});
