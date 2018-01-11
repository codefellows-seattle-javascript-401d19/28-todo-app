import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../components/dashboard/note-form';

describe('NoteForm', () => {
  describe('initial state', () => {
    test(' -- contains title and content being empty strings', () => {
      let mountedNoteForm = mount(<NoteForm />);

      expect(mountedNoteForm.state('title')).toEqual('');
      expect(mountedNoteForm.state('content')).toEqual('');
    });
  });
});