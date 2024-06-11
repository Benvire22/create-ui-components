import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: () => void | undefined;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({show, type, onDismiss, clickDismissable, children}) => {

  const onClickDismissable = (): void => {
    if (clickDismissable && onDismiss !== undefined) {
      onDismiss();
    }
  };

  return (
    <div
      className={`alert alert-${type} w-50`}
      role="alert"
      style={{display: show ? 'block' : 'none'}}
      onClick={onClickDismissable}
    >
      <div className="d-flex justify-content-between">
        {children}
        {onDismiss !== undefined && !clickDismissable ? (
          <button type="button" className="btn-close" onClick={onDismiss} aria-label="Close"></button>
        ) : null}
      </div>
    </div>
  );
};

export default Alert;