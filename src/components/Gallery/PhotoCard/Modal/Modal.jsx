import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

class Modal extends Component {
  backdropRef = createRef();

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  UNSAFE_componentWillMount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  handlePressKey = evt => {
    if (evt.code !== 'Escape') return;
    this.props.closeModal();
  };

  handleBackdropClick = evt => {
    const { current } = this.backdropRef;
    if (current && evt.target !== current) return;
    this.props.closeModal();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className={style.overlay}
        role="button"
        tabIndex={0}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={style.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
