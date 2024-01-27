import removeIcon from '../assets/remove.png';
import '../styles/howItWorksStep.css';

const HowItWorksStep = ({ step, onRemoveStep, editOn, setEditOn }) => {

  const btnRemove = ()=>{
    onRemoveStep(step.id);
    setEditOn(false);
  }

  const RenderBtnRemove = ()=>{
    if(editOn){
      return(
        <img className='btn_remove' onClick={btnRemove} src={removeIcon} alt="" />
      )
    }
  }

  return (
    <div className="step">
      <div>
        <img src={step.img} alt="" className='step_img' />
        <h4>{step.title}:</h4>
        <p>{step.description}</p>
      </div>
      <RenderBtnRemove />
    </div>
  );
};

export default HowItWorksStep;
