import {useState} from "react";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

    return (
        <div className="App">
          <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)} >
            <div className="modal-body">
              <p>This is modal content</p>
            </div>
          </Modal>
      </div>
    );
};

export default App;