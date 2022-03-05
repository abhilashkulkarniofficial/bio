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
        <div className='App-inner'>
          <p className='Head-p'>{data.basic.header}</p>
          <p>
            <span className='Title-p'>ABOUT:</span> <br/><br/> {data.basic.about} <br/>
          </p>
          <br/>
          <div className='Section'>
          <Education data={data.education}/>
          </div>
          <br/>
          <div className='Section'>
          <Experience data={data.experience}/>
          </div>
          <br/>
          <div className='Section'>
          <Projects data={data.projects}/>
          </div>
          <br/>
          <div className='Section'>
          <Skills data={data.skills}/>
          </div>
          

        </div>
        
      </div>
    );
  }
  
}

export default App;
