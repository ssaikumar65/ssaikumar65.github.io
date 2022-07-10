import { CalendarToday,Mail,Place } from '@mui/icons-material';
import './index.css';
const details = require('../../data/details.json');

const AboutComponent = () => {
  return (
    <div className='acomp'>
      <div data-aos="fade-right" className="atitle">
        <p>About Me</p>
      </div>
      <div data-aos="fade-left" className="aholder">
        <div className="about">
          <p>
            {details.about}
          </p>
          <ul>
            <li><CalendarToday fontSize='small'/>Age : <span>{details.age}</span></li>
            <li><Mail fontSize='small'/>Email : <span>{details.mail}</span></li>
            <li><Place fontSize='small'/>Place : <span>{details.place}</span></li>
          </ul>
        </div>
        <div className="details"></div>
      </div>
    </div>
  )
}

export default AboutComponent