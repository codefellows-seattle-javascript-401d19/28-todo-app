import React from 'react';
import './modal.scss';

class Modal extends React.Component{
  render(){
    let displayToggleClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    return (
      <div className = {displayToggleClassName} >
        <button onClick={this.props.handleClose}> Close </button>
        <main className='modal-main'>
          {this.props.children}
        </main>
      </div>
    );

  }
}

export default Modal;