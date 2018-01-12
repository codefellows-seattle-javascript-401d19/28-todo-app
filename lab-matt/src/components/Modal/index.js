import React from 'react';
import './modal.scss';

class Modal extends React.Component {
  render() {
    let visibility = this.props.setVisibility ? 'display-block' : 'display-none';

    return (
      <div className={'modal ' + visibility}>
        <main className='modal-main'> 
          <button className='close-editor' onClick={this.props.handleClose}> X </button>
          {this.props.children}
        </main>
      </div>
    );  
  }
}

export default Modal;