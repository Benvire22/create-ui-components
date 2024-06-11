import {useState} from "react";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(true);


  const closeAlert = () => {
    console.log('click close btn');
  };

    return (
        <div className="App container-xxl p-5">
          <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)} >
            <div className="modal-body">
              <p>This is modal content</p>
            </div>
          </Modal>
          <Alert
              type="primary"
              onDismiss={closeAlert}
          >
            This a primary alert
          </Alert>
          <Alert type="danger">
            This a danger alert
          </Alert>
      </div>
    );
};

export default App;