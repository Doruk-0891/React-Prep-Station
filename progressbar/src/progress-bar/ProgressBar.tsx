import React from 'react'
import './style.css';

export interface ProgressBarProps {
    value: number;
}

const ProgressBar:React.FC<ProgressBarProps> = (props) => {
    const {value} = props;

  return (
    <div className='progressbar-container'>
      <span>{value}%</span>
      <div className='progress-fill'
      style={{
        width: `${value.toFixed()}%`

      }}
      />
    </div>
  )
}

export default ProgressBar