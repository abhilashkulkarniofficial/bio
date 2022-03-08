import React from 'react';
import './style.css';

const Experience = (props) => {
    var rows = []
    var index = 0;
    for(const x of props.data){
        if(x.from !== ""){
            rows.push(
                <div key={''+index}>
                    <p className='Title-p'> {x.from} =&#62; {x.to} : {x.role} </p>
                    <p className='Content-p'>
                        {x.orglink !== "" ? 
                        (<a className='Title-a' href={x.orglink} target='_blank'>{x.orgname}</a>) :
                        (x.orgname)}, {x.location}
                    </p>
                    <div>
                        <ul>
                            {
                                x.descriptions.map(function(obj, i){
                                    return <li className='Content-li'>{obj}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
            index+=1;
        }
    }
    return (
        <div>
            <div className='Title-p'>
                <p><a href='#links'><span>&#8679;</span></a>  WORK EXPERIENCE:</p>
            </div>
            {rows}
        </div>
    )
}

export default Experience;