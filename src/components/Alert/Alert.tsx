import React from 'react';

interface Props extends React.PropsWithChildren {
    type: string;
    onDismiss?: React.MouseEventHandler | undefined;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children}) => {
    return (
        <div
            className={`alert alert-${type} d-flex justify-content-between w-50`}
            role="alert"
        >
            {children}
            {onDismiss !== undefined ? (
                    <button type="button" className=" btn-close" onClick={onDismiss} aria-label="Close"></button>
            ) : null}
        </div>
    );
};

export default Alert;