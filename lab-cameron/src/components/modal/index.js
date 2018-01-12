import React from 'react';
import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <main className='modal-main'>
        {children}
      </main>
      <button onClick={handleClose}>close</button>
    </div>
  );
};

export default Modal;
