import React from 'react';

class Modal extends React.Component {
  render() {
    let shownOrHidden = this.props.visible ? 'modal-display-block' : 'modal-display-none';
    let {handleExit} = this.props;

    return (
      <div className={shownOrHidden}>
        <button onClick={handleExit}>Exit</button>
      </div>
    );
  }
}

export default Modal;
