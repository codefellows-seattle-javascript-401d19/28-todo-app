import React, { Component } from 'react';

const NoteItem = ({ key, index, title, content, id, onRemove }) => {
  const handleRemove = key => {
    return onRemove(key);
  };

  return (
    <div>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <button onClick={() => handleRemove(id)} type='button'>Delete</button>
    </div>
  );
};

export default NoteItem;
