import React, { useState } from 'react';
import HowItWorks from './components/HowItWorks';
import NewStepForm from './components/NewStepForm';
import target from './assets/target.svg';
import join from './assets/joinGrup.svg';
import payment from './assets/payment.svg';
import reward from './assets/reward.svg';
import './App.css';

function App() {

  const [editOn, setEditOn] = useState(false);
  const [steps, setSteps] = useState([
    { id: 1, title: 'Step 1', img: target, description: 'Set your goal' },
    { id: 2, title: 'Step 2', img: join, description: 'Create or Join Group' },
    { id: 3, title: 'Step 3', img: payment, description: 'Pay amount on time' },
    { id: 4, title: 'Step 4', img: reward, description: 'Earn Reward' }
  ]);

  const removeStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  const RenderNewStepForm =()=>{
    if(editOn){
      return(
        <NewStepForm setEditOn={setEditOn} steps={steps} setSteps={setSteps} />
      )
    }
  }

  return (
    <>
      <div className="App">
        <HowItWorks steps={steps} onRemoveStep={removeStep} editOn={editOn} setEditOn={setEditOn} />
      </div>
      <RenderNewStepForm />
    </>
  );
}

export default App;
