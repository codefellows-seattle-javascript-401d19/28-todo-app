import React, { Component } from 'react';
import NoteItem from '../noteitem';

const NoteList = ({ notes, onRemove, onUpdate }) => {
  const handleRemove = key => {
    return onRemove(key);
  };

  const handleUpdate = note => {
    return onUpdate(note);
  };

  return (
    <div id='notelist'>
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>
            <NoteItem
              title={note.title}
              content={note.content}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
              id={note.id}
              note={note}
            />
          </li>;
        })}
      </ul>
    </div>
  );
};

export default NoteList;
