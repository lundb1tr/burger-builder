import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  /* Only need to check the show prop to see if we should update the modal */
  shouldComponentUpdate({ show }) {
    return show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
