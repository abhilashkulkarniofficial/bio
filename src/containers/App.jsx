import {React, Component} from 'react';
import './App.css';
import Projects from '../components/Projects.js'
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';

const data = require('../biodata.json')

class App extends Component {
  render(){
    return (
      <div className="App-body">
        <div  id='links' className='App-inner'>
          <div className='Inline-element Inline-First'>
            <div className='Header-p'><p className='Head-p'>{data.basic.header}</p></div>
            <div className='Head-links'>
              <a href='#education'>Education</a>
              <a href='#experience'>Experience</a>
              <a href='#projects'>Projects</a>
              <a href='#skills'>Skills</a>
              <a href={data.basic.resumelink} target='_blank'>My Resume</a>
            </div>
          </div>
          <div className='Inline-element Inline-Second'>
            <img src={data.basic.profilelink} alt='Profile photo'/>
          </div>
          
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
          <div className='Footer-links'>
             {
               data.socials.map(function(obj, i){
                  return <a href={obj.link} target='_blank'>{obj.type}</a>
              })
             }
          </div>

        </div>
        
      </div>
    );
  }
  
}

export default App;
