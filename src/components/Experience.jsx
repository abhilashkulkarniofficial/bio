import React from 'react';
import './style.css';

const Experience = (props) => {
    var rows = []
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div>
                    <p className='Title-p'> {x.from} =&#62; {x.to} : {x.role} </p>
                    <p className='Content-p'>{x.orgname} </p>
                    <div>
                        <ul>
                            {
                                x.descriptions.map(function(obj, i){
                                    return <li>{obj}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <p className='Title-p'><b>WORK EXPERIENCE:</b></p>
            {rows}
        </div>
    )
}

export default Experience;