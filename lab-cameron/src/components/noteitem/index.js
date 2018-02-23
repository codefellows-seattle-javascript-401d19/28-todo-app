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
    <div id='noteitems' onDoubleClick={showModal}>
      <div id='noteitemtitle'>
        <p id='innertitle'>Title:</p><p>{title}</p>
      </div>
      <div id='noteitemcontent'>
        <p id='innercontent'>Content:</p><p>{content}</p>
      </div>
      <button
        className='notebuttondelete'
        onClick={() => handleRemove(id)}
        type='button'
      >
        Delete
      </button>
      <Modal id='modal' handleClose={hideModal} show={note.editing}>
        <div>
          <p id='editing'>Editing:</p><div id='editingouter'>{note.title}</div>
        </div>
        <NoteForm onComplete={updateAndClose} note={note} />
      </Modal>
    </div>
  );
};

export default NoteItem;
