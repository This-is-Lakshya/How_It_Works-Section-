import HowItWorksStep from './HowItWorksStep';
import svgArrow from '../assets/svgArrow.svg';
import '../styles/howItWorks.css';

const HowItWorks = ({ steps, onRemoveStep, editOn, setEditOn }) => {

  const onClickEdit = ()=>{
    setEditOn(true);
  }

  let i = 0;

  const RenderArrow = ()=>{

    if(2*(steps.length)-1 > i){
      i++;
      return(
        <img className='svgArrow' src={svgArrow} alt='' />
      )
    }
  }

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <>
            <HowItWorksStep key={step.id} step={step} onRemoveStep={onRemoveStep} editOn={editOn} setEditOn={setEditOn} />
            <RenderArrow  />
          </>
        ))}
      </div>
      <button onClick={onClickEdit} className='editBtn'>Edit<span className="material-symbols-outlined">edit</span></button>
    </div>
  );
};

export default HowItWorks;