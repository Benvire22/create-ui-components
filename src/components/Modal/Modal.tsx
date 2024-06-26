import React from 'react';
import { Button } from '../../types/types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons?: Button[] | undefined;
}

const Modal: React.FC<Props> = ({show, title, onClose, buttons, children}) => {
  return (
    <>
      <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
      <div
        className="modal show"
        style={{display: show ? 'block' : 'none'}}
        onClick={onClose}
      >
        <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            {children}
            {buttons !== undefined && buttons.length > 0 ? (
              <div className="modal-footer">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn btn-${button.type}`}
                    onClick={button.onClick}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            ) : null}

          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;