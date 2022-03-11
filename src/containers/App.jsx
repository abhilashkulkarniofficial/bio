import {React, Component} from 'react';
import './App.css';
import Projects from '../components/Projects.js'
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Funfacts from '../components/Funfacts';
import ProjectsContainer from './ProjectsContainer';

const data = require('../biodata.json')

class App extends Component {
  constructor(){
    super();
    this.state = {
      switchpage: true
    }

    this.onSwitch = this.onSwitch.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goProjects = this.goProjects.bind(this);
  }

  onSwitch(e){
    e.preventDefault();
    this.state.switchpage ? this.setState({switchpage: false}) : this.setState({switchpage: true});
  }

  goHome(e){
    e.preventDefault();
    this.setState({switchpage: true})
  }

  goProjects(e){
    e.preventDefault();
    this.setState({switchpage: false})
  }

  render(){
    return (
      <div className="App-body">
        <div  id='links' className='App-inner'>
          <div className='Inline-element Inline-First'>
            <div className='Header-p'><p className='Head-p'>{data.basic.header}</p></div>
            <div className='Head-links'>
              <a href='javascript:void(0)' onClick={this.goHome}>Home</a>
              <a href='#education'>Education</a>
              <a href='#experience'>Experience</a>
              <a href='javascript:void(0)' onClick={this.goProjects}>All Projects</a>
              <a href='#skills'>Skills</a>
              <a href={data.basic.resumelink} target='_blank'>My Resume</a>
            </div>
          </div>
          <div className='Inline-element Inline-Second'>
            <img src={data.basic.profilelink} alt='Profile photo'/>
          </div>
          <div style={{display: this.state.switchpage ? 'block': 'none'}} >
          <p>
            <span className='Title-p'>ABOUT:</span> <br/><br/> {data.basic.about} <br/>
          </p>
          <br/>
          <div id='education' className='Section' key="education">
          <Education data={data.education} />
          </div>
          <br/>
          <div id='experience' className='Section' key="experience">
          <Experience data={data.experience} />
          </div>
          <br/>
          <div id='projects' className='Section' key="projects">
          <Projects data={data.projects} />
          </div>
          <br/>
          <div id='skills' className='Section' key="skills">
          <Skills data={data.skills} />
          </div>
          <br/>
          <div id='facts' className='Section' key="facts">
          <Funfacts data={data.funfacts} />
          </div>
          <br/>
          <div className='Footer-links'>
             {
               data.socials.map(function(obj, i){
                  return <a href={obj.link} target='_blank'>{obj.type}</a>
              })
             }
          </div>
            
            </div>

        </div>
        <div style={{display: this.state.switchpage ? 'none': 'block'}}>
        <ProjectsContainer />
        </div>
        
        {/* style={{display: this.state.switchpage ? 'none': 'block'}} */}
      </div>
    );
  }
  
}

export default App;
