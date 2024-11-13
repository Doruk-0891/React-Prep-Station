import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './progress-bar/ProgressBar'

function App() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let timerRef = setInterval(() => {
      setProgressValue(prev => prev+1);
    }, 300);

    if (progressValue >= 100) {
      clearInterval(timerRef);
    }

    return () => clearInterval(timerRef);
  }, [progressValue]);

  return (
    <div>
      <ProgressBar value={progressValue} />
    </div>
  )
}

export default App
