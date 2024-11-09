import { useState } from 'react'
import './App.css'
import Popup from './Popup'


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePopupToggle = (updatedOpenState=false) => {
    setIsOpen(updatedOpenState);
  }

  return (
    <section>
      <h1>Popup</h1>
      {
        !isOpen ? <button onClick={() => handlePopupToggle(true)}>Open Popup</button> :
        <Popup title='Popup with close and timed close feature' togglePopup={handlePopupToggle}>
          <h4>Welcome!!!</h4>
          <p>You can definitely close this popup, just by clicking on close button. But let me tell you I can do the same without even clicking on it.</p>
          <p>Wait and watch</p>
        </Popup>
      }
    </section>
  )
}

export default App
