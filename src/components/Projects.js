import React from 'react';
import './style.css';

const Project = (props) => {
    var rows = []
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div>
                    {x.link !== "" ? 
                    (<p className='Title-p'>{x.from} =&#62; <a className='Title-a' href={x.link}>{x.title}</a>  </p>) :
                    (<p className='Title-p'>{x.from} =&#62; {x.title}</p>)}
                    
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
            <div className='Title-p'>
                <p><a href='#links'><span>&#8679;</span></a>  PROJECTS:</p>
            </div>
            {rows}
        </div>
    )
}

export default Project;