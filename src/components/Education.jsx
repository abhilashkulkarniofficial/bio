import React from 'react';
import './style.css';


const Education = (props) => {
    var rows = []
    for(const x of props.data){
        rows.push(
            <div>
                <p className='Title-p'>{x.from} =&#62; {x.to} : {x.uniname}</p>
                <p className='Content-p'><b>{x.degree}</b> in {x.major} (GPA: {x.gpa})<br/><br/>
                <b>Related Courses:</b> {x.courses} </p>
            </div>
        )
    }

    return (

        <div><p className='Title-p'><b>EDUCATION:</b></p>{rows}</div>
    )
}

export default Education;