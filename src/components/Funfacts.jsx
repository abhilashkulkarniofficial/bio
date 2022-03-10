import React from 'react';
import './style.css';

const Project = (props) => {
    var rows = []
    for(const x of props.data){
        rows.push(
            <li className='Facts-li'>{x}</li>
        )
        
    }
    return (
        <div>
            <div className='Title-p'>
                <p><a href='#links'><span>&#8679;</span></a>  Fun facts about me:</p>
            </div>
            <div>
                <ol>
                    {rows}
                </ol>
            </div>
            
        </div>
    )
}

export default Project;