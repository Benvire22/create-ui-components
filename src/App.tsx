import {useState} from "react";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFirstAlert, setShowFirstAlert] = useState<boolean>(true);
  const [showSecondAlert, setShowSecondAlert] = useState<boolean>(true);
  const [showThirdAlert] = useState<boolean>(true);

  return (
    <div className="App container-xxl p-5">
      <button type="button" className="btn btn-primary mb-3 mx-3" onClick={() => setShowModal(true)}>show Modal</button>
      <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
      <Alert
        type="warning"
        show={showFirstAlert}
        onDismiss={() => {setShowFirstAlert(false)}}
      >
        This a warning alert
      </Alert>
      <Alert
        type="success"
        show={showSecondAlert}
        onDismiss={() => setShowSecondAlert(false)}
        clickDismissable
      >
        This a success alert
      </Alert>
      <Alert show={showThirdAlert} type="danger" >
        This a danger alert
      </Alert>
    </div>
  );
};

export default App;