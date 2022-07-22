import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import SkillsComponent from './components/SkillsComponent';
import ProjectComponent from './components/ProjectComponent';
import QualificationsComponent from './components/QualificationsComponent';
import PublicationComponent from './components/PublicationComponent';
import AboutComponent from './components/AboutComponent';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function App() {
  return (
    <div>
      <MainComponent/>
      <AboutComponent/>
      <QualificationsComponent/>
      <SkillsComponent/>
      <PublicationComponent/>
      <ProjectComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
