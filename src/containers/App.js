import {React, Component} from 'react';
import './App.css';
import Projects from '../components/Projects.js'
import Skills from '../components/Skills';

class App extends Component {
  render(){
    return (
      <div className="App-body">
        <div className='App-inner'>
          <p className='Head-p'>Welcome to Abhilash Kulkarni's Profile!</p>
          <p>
            <span className='Title-p'>About:</span> <br/><br/>
            I'm a graduate student at USC Viterbi School of Engineering 
            pursuing Masters in Computer Science. I'm a proficient Full-Stack Web Developer,
            Android Developer and Data Scientist. <br/>
          </p>
          
          <div className='Section'>
          <Projects/>
          </div>
          <br></br>
          <div className='Section'>
          <Skills/>
          </div>
          

        </div>
        
      </div>
    );
  }
  
}

export default App;
