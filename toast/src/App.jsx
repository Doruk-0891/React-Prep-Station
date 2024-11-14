import useToast from './hooks/useToast';

function App() {
  const [ToastComponent, triggerToast] = useToast();

  const handleClick = (type) => {
    let options = null;
    switch(type) {
      case 'success':
        options = {
          type, message: 'Success Message', duration: 3000
        };
      break;
      case 'info':
        options = {
          type, message: 'Info Message', duration: 3000
        };
      break;
      case 'warning':
        options={
          type, message: 'Warning Message', duration: 3000
        }
      break;
      case 'error':
        options = {
          type, message: 'Error Message', duration: 3000
        };
      break;
      default:
        options = {};
    }
    triggerToast(options);
  }

  return (
    <div>
      <button onClick={() => handleClick('success')}>Success</button>
      <button onClick={() => handleClick('info')}>Info</button>
      <button onClick={() => handleClick('warning')}>Warning</button>
      <button onClick={() => handleClick('error')}>Error</button>
      {ToastComponent}
    </div>
  )
}

export default App
