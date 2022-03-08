import React from 'react';
import './style.css';

const Skills = (props) => {
    var rows = []
    var index = 0;
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div className='Content-p' key={''+index}>
                    <p>
                        <b>{x.title} : </b> 
                        {
                            x.list.join(', ')
                        }
                    </p>
                </div>
            )
            index+=1;
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