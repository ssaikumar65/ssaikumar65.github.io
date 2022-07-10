import './index.css';
import { useState } from 'react';
import {ArrowCircleUp,Bolt} from '@mui/icons-material'; 
import SocialMedia from '../SocialMedia';

const FooterComponent = () => {
  const [visible, setVisible] = useState(false);

  function scrollup(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footername">
          SODIPILLI SAI KUMAR
        </div>
        <span>Connect with Me!</span>
        <div className="footericons">
          <SocialMedia theme={'small'} fontsize={'medium'} />
        </div>
      </div>
      <div className="copyright"><Bolt/>  Designed  By  SSK  <Bolt/></div>
      <div onClick={()=>scrollup()} className={`scrollup ${visible?'is-active':''}`}><ArrowCircleUp fontSize='large'/></div>
    </div>
  )
}

export default FooterComponent