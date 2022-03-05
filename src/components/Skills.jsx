import React from 'react';
import './style.css';

const Skills = (props) => {
    var rows = []
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div className='Content-p'>
                    <p>
                        <b>{x.title} : </b> 
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
            <div className='Title-p'>
                <p><a href='#links'><span>&#8679;</span></a>  SKILLS:</p>
            </div>
            {rows}
        </div>
    )
}

export default Skills;