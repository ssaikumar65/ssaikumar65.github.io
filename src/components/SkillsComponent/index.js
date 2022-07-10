import './index.css';
import data from '../../data/skills.json';

const SkillsComponent = () => {
  return (
    <div className='skillcomp'>
      <div data-aos="flip-up" className="stitle">
        <p>Skills</p>
      </div>
      <div className="sholder">
        {
          data.map((item,index)=>(
            <div data-aos="flip-up" key={index} className="card">
              <img alt='icon' src={item.icon}/>
              <h4>{item.name}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsComponent