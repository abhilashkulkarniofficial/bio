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
          <p className='Head-p'>Welcome to Abhilash Kulkarni's Profile!</p>
          <p>
            <span className='Title-p'>ABOUT:</span> <br/><br/>
            I'm a graduate student at USC Viterbi School of Engineering 
            pursuing Masters in Computer Science. I'm a proficient Full-Stack Web Developer,
            Android Developer and Data Scientist. <br/>
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
          <Skills/>
          </div>
          

        </div>
        
      </div>
    );
  }
  
}

export default App;
