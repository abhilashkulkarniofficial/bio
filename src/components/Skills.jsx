import React from 'react';
import './style.css';

const Skills = (props) => {
    var rows = []
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div className='Content-p'>
                    <p>
                        <b>{x.title}:</b> 
                        {
                            x.list.join(', ')
                        }
                    </p>
                </div>
            )
        }
        
    }
    return (
        <div>
            <p className='Title-p'><b>SKILLS:</b></p>
            {rows}
        </div>
    )
}

export default Skills;