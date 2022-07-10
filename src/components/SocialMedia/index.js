import './index.css';
import {Email,Instagram,Twitter,LinkedIn, GitHub} from '@mui/icons-material';


const accountHandles = require('../../data/details.json');

const SocialMedia = ({fontsize, theme}) => {
  return (
    <div className={`icons ${theme}`}>
        <a href={'mailto:'+ accountHandles.mail} >
            <div className={`icon ${theme}`}><Email fontSize={fontsize} /></div>
        </a>
        <a href={'https://www.instagram.com/'+accountHandles.commonID}  target="_blank" rel="noopener noreferrer">
            <div className={`icon ${theme}`}><Instagram fontSize={fontsize} /></div>
        </a>
        <a href={'https://www.twitter.com/'+accountHandles.commonID} target="_blank" rel="noopener noreferrer">
            <div className={`icon ${theme}`}><Twitter fontSize={fontsize} /></div>
        </a>
        <a href={'https://in.linkedin.com/in/'+ accountHandles.commonID +'?trk=public_profile_browsemap'} target="_blank" rel="noopener noreferrer">
            <div className={`icon ${theme}`}><LinkedIn fontSize={fontsize} /></div>
        </a>
        <a href={'https://www.github.com/'+ accountHandles.commonID} target="_blank" rel="noopener noreferrer">
            <div className={`icon ${theme}`}><GitHub fontSize={fontsize} /></div>
        </a>
    </div>
  )
}

export default SocialMedia