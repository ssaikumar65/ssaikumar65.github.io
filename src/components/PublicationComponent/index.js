import './index.css';
const accountHandles = require('../../data/details.json');


const PublicationComponent = () => {
  return (
    <div className='pubcomp'>
        <div data-aos="zoom-in" className="pubtitle">Publications</div>
        <div data-aos="zoom-in-up" className="pubholder">
            <div className="publication">
                <div className="desc">
                    <p><span>Title</span> : An IoT based Smart Home with Virtual Assistant</p>
                    <p><span>Published</span> : May 2021</p>
                    <p><span>Conference</span> : I2CT</p>
                </div>
                <div className="images">
                    <div className="image">
                        <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt='Snapshot'/>
                    </div>
                    <div className="image">
                        <img src="https://img.icons8.com/external-others-pike-picture/48/external-IoT-fintech-others-pike-picture.png" alt='Snapshot'/>
                    </div>
                    <div className="image">
                        <img src="https://img.icons8.com/color/48/raspberry-pi.png" alt='Snapshot'/>
                    </div>
                </div>
                <div className="pubbutton">
                    <a href={accountHandles.ieee}  target="_blank" rel="noopener noreferrer">
                        <div className="button">Documentation</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublicationComponent