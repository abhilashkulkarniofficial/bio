import React from 'react';
import './style.css';

const Project = (props) => {
    var rows = []
    var index = 0;
    for(const x of props.data){
        if(x.from !== "" && x.major){
            rows.push(
                <div key={''+index}>
                    {x.link !== "" ? 
                    (<p className='Title-p'>{x.from} =&#62; <a className='Title-a' href={x.link} target='_blank'>{x.title}</a>  </p>) :
                    (<p className='Title-p'>{x.from} =&#62; {x.title}</p>)}
                    
                    <div className='Content-p'>
                        {x.description}
                        <br/><br/>
                        <b>Stack : </b>{x.stack}
                        <br/><br/>
                    </div>

                </div>
            )
            index+=1;
        }
        
    }
    return (
        <div>
            <div className='Title-p'>
                <p><a href='#links'><span>&#8679;</span></a>  PROJECTS:</p>
            </div>
            {rows}
            <div className='More'><a href='/projects' className='More-a'>Checkout more projects here <span>&#8658;</span></a></div>
        </div>
    )
}

export default Project;