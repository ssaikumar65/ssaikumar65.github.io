import './index.css';
import data from '../../data/education.json';

const QualificationsComponent = () => {
  return (
    <div className='qcomp'>
      <div data-aos="flip-left" className="qtitle">
        <p>Education & Experience</p>
      </div>
      <div className="qholder">
        <div className="timeline">
          {
            data.map(item=>(
              <div data-aos="flip-left" key={item.id} className={`card ${item.align}`} >
              <h3>{item.role}</h3>
              <h4>{item.place}</h4>
              <p>{item.date}</p>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default QualificationsComponent