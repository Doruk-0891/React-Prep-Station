import { useState } from "react";
import Modal from "./Modal/Modal";
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal showModal={isModalOpen} toggleModal={toggleModal} modalData={{title: 'Title', message: 'This is a  message'}} />
    </div>
  )
}

export default App;
