import React, { Component } from 'react';

const NoteList = ({ notes, onRemove }) => {
  const handleRemove = key => {
    return onRemove(key);
  };

  return (
    <div>
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>
            <p>Title: {note.title}</p>
            <p>Content: {note.content}</p>
            <button onClick={() => handleRemove(note.id)} type='button'>Delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default NoteList;
