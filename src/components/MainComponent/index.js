import './index.css';
import SocialMedia from '../SocialMedia';
import { Lightbulb } from '@mui/icons-material';
import { useState,useEffect } from 'react';

const MainComponent = () => {
  const [date, setDate] = useState(new Date());
  const [theme,setTheme]=useState("");
  useEffect(() => {
    const d = window.getComputedStyle(document.documentElement).getPropertyValue('--primary');
    if(d==="white"){
      setTheme("white");
    }
    else{
      setTheme("black")
    }
  }, []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);


  var day="Good Day!";
  var today = new Date(),
  time = today.getHours();
  if(time>=5 && time<=11){
    day="Good Morning";
  }
  else if(time>=12 && time<=16){
    day="Good Afternoon";
  }
  else if(time>=17 && time<=20){
    day="Good Evening";
  }
  else{
    day="It's Night😴";
  }

  function themeHandler(){
    if(theme==="black"){
      document.documentElement.style.setProperty('--primary',"white");
      document.documentElement.style.setProperty('--secondary',"black");
      document.documentElement.style.setProperty('--laptop',"black");
      setTheme("white")
    }
    else{
      document.documentElement.style.setProperty('--primary',"black");
      document.documentElement.style.setProperty('--secondary',"white");
      document.documentElement.style.setProperty('--laptop',"red");
      setTheme("black")
    }

  }

  function refreshClock() {
    setDate(new Date());
  }

  function addZero(d) {
    if (d < 10) {d = "0" + d}
    return d;
  }


  return (
        <div className="mholder">
          <div onClick={()=>themeHandler()} className="theme">
            <Lightbulb fontSize='large' />
          </div>
          <div className="logo">
            SSK
          </div>
          <div className="bio">
            <h1>Hi {day}!</h1>
            <h2>I am <span>Sai Kumar</span></h2>
            <div className="text-anim">
              <div className="scroll">
                <div className='text1'>React Native Developer</div>
                <div className='text2'>Digital Artist</div>
                <div className='text3'>Engineer</div>
                <div className='text4'>Full Stack Developer</div>
              </div>
            </div>
            <SocialMedia fontsize={'large'}/>
          </div>
          <div data-aos="zoom-in" className="art-body">
            <div className="laptop">
              <div className="screen">
                <div className="onscreen">
                {date.getHours()} : {addZero(date.getMinutes())}
                <div className="line"></div>
                </div>
              </div>
              <div className="keyboard"></div>
            </div>
            </div>
        </div>
  )
}

export default MainComponent;