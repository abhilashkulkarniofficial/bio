import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './containerstyles.css';
const data = require('../biodata.json');


class ProjectsContainer extends Component {
    // constructor(){
    //     projectData = data.projects;
    // }

    render() {
        return (
        <div className="App-body">
            <div  id='links' className='App-inner'>
            {/* <div className='Inline-element Inline-First'>
                <div className='Header-p'><p className='Head-p'>CHECKOUT ALL OF MY PROJECTS HERE</p></div>
                <div className='Head-links'>
                <a href='/bio/'>Return <span>&#8629;</span></a>
                </div>
            </div> */}
            {/* <div className='Project-Div'>
            <div>
                            <p>{"Token Bucket Filter"}</p>
                            <p>Timeline: {"Feb 2022"}</p>
                            <p>Description: </p>
                            
                        </div>

            <Tabs >
                <TabList>
                <Tab>Project Details</Tab>
                <Tab>Description</Tab>
                <Tab>Associated Skills</Tab>
                </TabList>

                <TabPanel className='Project-TabPanels'>
                <h2>Project Details</h2>
                </TabPanel>
                <TabPanel>
                <h2>Description</h2>
                </TabPanel>
                <TabPanel>
                <h2>Associated Skills</h2>
                </TabPanel>
            </Tabs>
            </div> */}
            <div>
            {
                data.projects.map(function(project, i){
                    if(project.from !== ""){
                        return <div className='Project-Div' key={i}>
                            <p className='Project-Title'>{project.title}</p>
                            <p>Timestamp: {project.from}</p>
                            <Tabs >
                                <TabList>
                                <Tab>Description</Tab>
                                <Tab>Stack/Frameworks</Tab>
                                </TabList>
                                <TabPanel>
                                {
                                    // project["detailed-description"].map(function(desc, j){
                                    //     return <p>{desc}</p>
                                    // })
                                    <p className='Proj-Desc'>{project.description}</p>
                                }
                                </TabPanel>
                                <TabPanel>
                                {project['detailed-stack'].os !== undefined ? <p className='Proj-Stack'><b>Operating System : </b>{project['detailed-stack'].os}</p> : <p style={{margin: "0px"}}></p>}
                                {project['detailed-stack'].lang !== undefined ? <p className='Proj-Stack'><b>Language : </b>{project['detailed-stack'].lang}</p> : <p style={{margin: "0px"}}></p>}
                                {project['detailed-stack'].libs !== undefined ? <p className='Proj-Stack'><b>Libraries : </b>{project['detailed-stack'].libs}</p> : <p style={{margin: "0px"}}></p>}
                                {project['detailed-stack'].framework !== undefined ? <p className='Proj-Stack'><b>Framework : </b>{project['detailed-stack'].framework}</p> : <p style={{margin: "0px"}}></p>}
                                {project['detailed-stack'].frontend !== undefined ? <p className='Proj-Stack'><b>Frontend Framework : </b>{project['detailed-stack'].frontend}</p> : <p style={{margin: "0px"}}></p>}
                                {project['detailed-stack'].backend !== undefined ? <p className='Proj-Stack'><b>Backend Framework : </b>{project['detailed-stack'].backend}</p> : <p style={{margin: "0px"}}></p>}
                                </TabPanel>
                            </Tabs>
                            <br/>
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