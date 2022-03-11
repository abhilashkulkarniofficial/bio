import {React, Component} from 'react';
import './App.css';
import Projects from '../components/Projects.js'
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Funfacts from '../components/Funfacts';

const data = require('../biodata.json')



class MainPage extends Component {
    render(){
        return ( 
          <div>
          
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

        )
    }
}

export default MainPage;