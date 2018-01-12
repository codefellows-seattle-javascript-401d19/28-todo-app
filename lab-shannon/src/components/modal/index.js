import React from 'react';
import './modal.scss';

class Modal extends React.Component {
  render() {
    let shownOrHidden = this.props.visible ? 'modal display-block' : 'modal display-none';
    let {handleExit} = this.props;

    return (
      <div className={shownOrHidden}>
        <button onClick={handleExit} className='exit'>Cancel</button>
        <h2 className='heading'>Updating Note</h2>
        <main className={'main-modal'}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Modal;
