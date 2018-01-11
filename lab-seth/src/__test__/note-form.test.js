import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../components/note-form';

describe('Note Form tests...', () => {
  test('Simple initial state test for proper setup', () => {
    let mockNoteForm = Enzyme.mount(<NoteForm />);

    expect(mockNoteForm.state('notes')).toEqual([]);
  });
});
