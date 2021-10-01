import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const modal = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={{ enter: 300, exit: 1000 }}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClose',
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
