import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ModalWrapper.css';

const ModalWrapper = ({ modalOpen, setModalOpen, content }) => {
  const contentEl = useRef();

  const clickOutside = ({ target }) => {
    if (modalOpen && !contentEl.current.contains(target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [modalOpen]);

  return (
    modalOpen ? (
      <div className="modal">
        <div className="modal-content" ref={contentEl}>
          {content}
        </div>
      </div>
    ) : null
  );
};

ModalWrapper.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired
};

export default ModalWrapper;
