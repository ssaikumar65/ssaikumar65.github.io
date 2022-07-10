import './index.css';
import {data} from '../../data/projects.js';
const ProjectComponent = () => {

  function goToSite(item){
    window.open(item,"_blank")
  }
  return (
    <div className='pcomp'>
      <div data-aos="fade-right" className="ptitle">
        <p>Projects</p>
      </div>
      <section className="cards">
          {
            data.map(item=>(    
              <article data-aos="fade-up" key={item.id} className="card">
                <div  className='holder'>
                  <div className="ctitle">{item.title}</div>
                  <div className="cimage">
                    <img src={item.image} alt='Snapshot'/>
                  </div>
                  <div className="desc">{item.desc}</div>
                  <div className="buttonholder">
                    <div onClick={()=>goToSite(item.link)} className="cbutton">Go to Site</div>
                    <div onClick={()=>goToSite(item.code)} className="cbutton">Code</div>
                  </div>
                </div>
              </article>
            ))
          }
      </section>
    </div>
  )
}

export default ProjectComponent