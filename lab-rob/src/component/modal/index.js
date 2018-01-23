import './modal.scss';

import React from 'react';

class Modal extends React.Component {
  render() {
    let visibilityClass = 'modal display-' + (this.props.show ? 'block' : 'none');

    return (
      <div className={visibilityClass}>
        <main className='modal-main'>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Modal;