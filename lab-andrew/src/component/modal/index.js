import React from 'react';
import './modal.scss';

class Modal extends React.Component {
  render() {
    let showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHideClassName}>
        <main className='modal-main'>
          {this.props.children}
        </main>
        <button className='close' onClick={this.props.closeEditingForm}>Close Window</button>
      </div>
    );
  }
}

export default Modal;