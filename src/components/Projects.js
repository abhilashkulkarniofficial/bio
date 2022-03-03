import React from 'react';
import './style.css';

const Project = (props) => {
    var rows = []
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div>
                    <p className='Title-p'>{x.from} =&#62; {x.title}</p>
                    <div className='Content-p'>
                        {x.description}
                        <br/><br/>
                        <b>OS/Language : </b>{x.platform}
                        <br/><br/>
                    </div>

                </div>
            )
        }
        
    }
    return (
        <div>
            <p className='Title-p'><b>PROJECTS:</b></p>
            {rows}
        </div>
    )
}

export default Project;