import React, {Component} from 'react';
const data = require('../biodata.json');

class ProjectsContainer extends Component {
    // constructor(){
    //     projectData = data.projects;
    // }

    render() {
        return (
        <div className="App-body">
            <div  id='links' className='App-inner'>
            <div className='Inline-element Inline-First'>
                <div className='Header-p'><p className='Head-p'>CHECKOUT ALL OF MY PROJECTS HERE</p></div>
                <div className='Head-links'>
                <a href='/bio/'>Return <span>&#8629;</span></a>
                </div>
            </div>
            <div>
            {
                data.projects.map(function(project, i){
                    if(project.from !== ""){
                        return <div>
                            <p>{project.title}</p>
                            <p>Timeline: {project.from}</p>
                            <p>Description: </p>
                            {
                                project["detailed-description"].map(function(desc, j){
                                    return <p>{desc}</p>
                                })
                            }
                        </div>
                    }
                    
                })
            }
            </div>
            
            </div>
        </div>
        )
    }
}

export default ProjectsContainer;