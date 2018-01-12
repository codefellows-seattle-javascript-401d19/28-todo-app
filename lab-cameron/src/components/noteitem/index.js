import React, { Component } from 'react';
import Modal from '../modal';
import NoteForm from '../noteform';

const NoteItem = ({ key, index, title, content, id, note, onRemove, onUpdate }) => {
  const handleRemove = key => {
    return onRemove(key);
  };

  const showModal = () => onUpdate({ ...note, editing: true });
  const hideModal = () => onUpdate({ ...note, editing: false });

  const updateAndClose = note => {
    onUpdate({ ...note, editing: false });
  };

  return (
    <div onDoubleClick={showModal}>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <button onClick={() => handleRemove(id)} type='button'>Delete</button>
      <Modal handleClose={hideModal} show={note.editing}>
        <h1>Editing {note.title}</h1>
        <NoteForm onComplete={updateAndClose} note={note} />
      </Modal>
    </div>
  );
};

export default NoteItem;
