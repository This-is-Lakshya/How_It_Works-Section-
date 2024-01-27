import { useState } from 'react';
import Select from 'react-select';
import TARGET from '../assets/target.svg';
import GROUPS from '../assets/joinGrup.svg';
import PAYMENT from '../assets/payment.svg';
import REWARD from '../assets/reward.svg';
import USER from '../assets/user.png';
import SEARCH from '../assets/search.png';
import FORM from '../assets/form.png';
import '../styles/newStepForm.css';

const NewStepForm = ({setEditOn, setSteps, steps }) => {

  const [desc, setDesc] = useState();
  const [selectedIcon, setSelectedIcon] = useState();

  const options = [
    {id:1, value: `${TARGET}`, label: "Target"},
    {id:2, value: `${GROUPS}`, label: "Groups"},
    {id:3, value: `${PAYMENT}`, label: "Payment"},
    {id:4, value: `${REWARD}`, label: "Reward"},
    {id:5, value: `${USER}`, label: "User"},
    {id:6, value: `${SEARCH}`, label: "Search"},
    {id:7, value: `${FORM}`, label: "Form"}
  ]

  const onAddStep = () => {

    if(steps.length !== 4){

      const newStep = {
        id: steps.length + 1,
        img: selectedIcon,
        title: `Step ${steps.length + 1}`,
        description: desc,
      };
      setSteps([...steps, newStep]);
  
      setSelectedIcon('');
      setDesc('');
      setEditOn(false);
      
    }else{
      alert('More than 4 Steps are not possible!');
    }

    
  };

  return (
    <div className='newStepForm'>
      <div className='Form'>

        <h2>Add New Step</h2>

        <div className='selectComp'>
          <h4>Icon</h4>
          <Select className='select' onChange={(e)=> setSelectedIcon(e.value)} options={options} />
        </div>

        <div>
          <h4>Description</h4>
          <input className='inputDesc' type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
        </div>

        <button className='addBtn' onClick={onAddStep}>Add</button>

      </div>
    </div>
  )
}

export default NewStepForm;