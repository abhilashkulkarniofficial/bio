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
          <p className='Head-p'>{data.basic.header}</p>
          <div className='Head-links'>
             <a href='#education'>Education</a>
             <a href='#experience'>Experience</a>
             <a href='#projects'>Projects</a>
             <a href='#skills'>Skills</a>
          </div>
          <p>
            <span className='Title-p'>ABOUT:</span> <br/><br/> {data.basic.about} <br/>
          </p>
          <br/>
          <div id='education' className='Section'>
          <Education data={data.education}/>
          </div>
          <br/>
          <div id='experience' className='Section'>
          <Experience data={data.experience}/>
          </div>
          <br/>
          <div id='projects' className='Section'>
          <Projects data={data.projects}/>
          </div>
          <br/>
          <div id='skills' className='Section'>
          <Skills data={data.skills}/>
          </div>
          

        </div>
        
      </div>
    );
  }
  
}

export default App;
