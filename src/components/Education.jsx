import React from 'react';
import './style.css';


const Education = (props) => {
    var rows = []
    for(const x of props.data){
        rows.push(
            <div>
                <p className='Title-p'>
                    {x.from} =&#62; {x.to} : {" "} 
                    {x.unilink !== "" ? 
                    (<a className='Title-a' href={x.unilink}>{x.uniname}</a>) :
                    (x.uniname)}, {x.location}
                </p>
                <p className='Content-p'><b>{x.degree}</b> in {x.major} (GPA: {x.gpa})<br/><br/>
                <b>Related Courses:</b> {x.courses} </p>
            </div>
        )
    }

    return (

        <div>
            <div className='Title-p'>
            <p><a href='#links'><span>&#8679;</span></a>  EDUCATION:</p> 
            </div>
            {rows}
        </div>
    )
}

export default Education;