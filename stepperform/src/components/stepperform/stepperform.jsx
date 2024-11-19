import './style.css';
import {useState} from 'react';

const StepperForm = (props) => {
    const {stepperList} = props;
    const  [selectedStepperIndex, setSelectedStepperIndex] = useState(0);

    const handleStepperIndex = (isNext=false) => {
        let updatedStepperValue = selectedStepperIndex;
        if (isNext) {
            updatedStepperValue += 1;
            if (updatedStepperValue >= stepperList.length-1) {
                updatedStepperValue = stepperList.length-1;
            }
        } else {
            updatedStepperValue -= 1;
            if (updatedStepperValue <= 0) {
                updatedStepperValue = 0;
            }
        }
        setSelectedStepperIndex(updatedStepperValue);
    }

  return (
    <div>
        {
            stepperList.map((item, idx) => {
                return (
                    <div key={idx} className="stepper-box">
                        <div className='stepper'>
                            <div className={`stepper-index ${idx <= selectedStepperIndex ? 'active' : ''}`}>{idx+1}</div>
                            <div className="stepper-label">{item['label']}</div>
                        </div>
                        {
                            idx < stepperList.length-1 && <div className={`line  ${idx < selectedStepperIndex ? 'active': ''} `}></div>
                        }
                    </div>
                );
            })
        }
        <div>
            {stepperList[selectedStepperIndex].content}
        </div>
        <div>
            <button onClick={() => handleStepperIndex(false)}>Back</button>
            <button onClick={() => handleStepperIndex(true)}>Continue</button>
        </div>
    </div>
  )
}

export default StepperForm;