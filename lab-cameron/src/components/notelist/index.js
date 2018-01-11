import React, { Component } from 'react';
import NoteItem from '../noteitem';

const NoteList = ({ notes, onRemove }) => {
  const handleRemove = key => {
    return onRemove(key);
  };

  return (
    <div>
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>
            <NoteItem
              title={note.title}
              content={note.content}
              onRemove={handleRemove}
              id={note.id}
            />
          </li>;
        })}
      </ul>
    </div>
  );
};

export default NoteList;
