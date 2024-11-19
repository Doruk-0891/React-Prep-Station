
import StepperForm from './components/stepperform/stepperform';

function App() {

  const stepperList = [
    {
      label: 'Products',
      content: <div>Products Component</div>
    },
    {
      label: 'Kart',
      content: <div>Kart Component</div>
    },
    {
      label: 'Offer',
      content: <div>Offer Component</div>
    },
    {
      label: 'Address',
      content: <div>Address Component</div>
    }
  ];

  return (
    <div>
      <h1>Stepper form</h1>
      <StepperForm stepperList={stepperList} />
    </div>
  )
}

export default App
