import React from 'react'
import './style.css';

const Toast = (props) => {
  const {optionsList, onClose} = props;
  return (
    <div>
      {
        optionsList.map((option) => {
          const {type, message, duration, id} = option;
          return (
            <div className={`toast-container ${type}`} key={id}>
              <p>
                  {message}
              </p>
              <button className='toast-button' onClick={() => onClose(id)}>X</button>
            </div>
          );
        })
      }
    </div>
  )
}

export default Toast