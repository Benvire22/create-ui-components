import {useState} from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import {Button} from './types/types';
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFirstAlert, setShowFirstAlert] = useState<boolean>(true);
  const [showSecondAlert, setShowSecondAlert] = useState<boolean>(true);
  const [showThirdAlert] = useState<boolean>(true);

  const buttons: Button[] = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)}
  ];

  return (
    <div className="App container-xxl px-5 pb-5">
      <button type="button" className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>show Modal</button>
      <Modal
        show={showModal}
        title="Some kinda modal title"
        onClose={() => setShowModal(false)}
        buttons={buttons}
      >
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
      <Alert
        type="warning"
        show={showFirstAlert}
        onDismiss={() => {
          setShowFirstAlert(false);
        }}
      >
        This is warning on dismiss alert!
      </Alert>
      <Alert
        type="success"
        show={showSecondAlert}
        onDismiss={() => setShowSecondAlert(false)}
        clickDismissable
      >
        This is success click dismissible alert!
      </Alert>
      <Alert show={showThirdAlert} type="danger">This is don't closing danger alert!</Alert>
    </div>
  );
};

export default App;