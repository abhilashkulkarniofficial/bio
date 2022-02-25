import React from 'react';
import './style.css';

const Project = () => {
    return (
        <div>
            <p className='Title-p'><b>PROJECTS:</b></p>
            <p className='Title-p'>Feb 2022 =&#62; Token Bucket Filter</p>
            <div className='Content-p'>Simulated a traffic shaper that transmits/services packets controlled by a token bucket filter using multi-threading within a single process. The Token Bucket Filter is developed using four POSIX threads that run parallelly sharing the queues and token bucket. The code is implemented on UNIX-based Solaris OS.</div>

            <p className='Title-p'>Jan 2022 =&#62; Bank Transaction Sorting using Circular Doubly Linked List in C</p>
            <div className='Content-p'>Designed an efficient circular doubly linked list in C to sort bank transactions based on their timestamp. Tested and implemented the code on UNIX-based Solaris OS.</div>

            <p className='Title-p'>Jun 2021 =&#62; Academic Staff Substitution WebApp</p>
            <div className='Content-p'>Developed Vue.JS Application for managing and substituting academic staff. Decreased time to substitute faculty on leave by implementing efficient algorithms to search and assign alternate staff.</div>
            
            <p className='Title-p'>May 2021 =&#62; Vaccination Appointment Reservation WebApp</p>
            <div className='Content-p'>Designed Web Application for searching vaccination appointments in India using Vue.JS/Express.JS framework hosted on Heroku. The application minimizes the time to book appointments by integrating automated notification using Azure Notification Hub for vaccination slots at preferred locations. The app makes use of Co-WIN Public APIs by Govt. of India to fetch vaccination data.</div>

            <p className='Title-p'>Sep 2019 =&#62; Resume Grader for Gyanamite EdTech Pvt. Ltd.</p>
            <div className='Content-p'>Designed and developed a Resume Grading system using Python and NLTK with an accuracy of 99%. The system performs data extraction from the resume and applies Morphological, Syntactic, and Semantic analysis to grade the resume according to the Job Description. It is integrated into the Gyanamite EdTech application that is used to teach new skills to students in Regional languages.</div>

            <p className='Title-p'>Sep 2018 =&#62; ESP-based Deep Semantic Segmentation for Self-Driving Cars</p>
            <div className='Content-p'>Conceived modified VGG16 architecture exploiting Hierarchical Feature Fusion of ESPNet and Skip Connections to increase the speed of Image segmentation from 4.4 to 8.7 FPS and achieve an accuracy of 94%. A paper is published in Springer Lecture Notes of Electrical Engineering titled “Deep Semantic Segmentation for Self-Driving Cars” describing the design and performance of the model.</div>

            

            

            <p></p>
            <div className='Content-p'></div>

            <p></p>
            <div className='Content-p'></div>
        </div>
    )
}

export default Project;