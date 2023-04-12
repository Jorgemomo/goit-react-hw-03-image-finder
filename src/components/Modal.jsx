import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { DivOverlay, DivModalStyle } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <DivOverlay onClick={this.handleBackdropClick}>
        <DivModalStyle>{this.props.children}</DivModalStyle>
      </DivOverlay>,
      modalRoot
    );
  }
}
export default Modal;
