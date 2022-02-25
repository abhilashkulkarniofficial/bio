import React from 'react';
import './style.css';

const Experience = () => {
    return (
        <div>
            <p className='Title-p'><b>WORK EXPERIENCE:</b></p>
            <p className='Title-p'>May 2020 =&#62; Jul 2021 : Technical Lead - Full Stack Development</p>
            <p className='Content-p'>Bloominmind HealthTech Inc., Bengaluru, India</p>
            <div>
                <ul>
                    <li>Spearheaded transition of Patient Billing feature from MERN stack to AWS RDB, Vue.JS and Express.JS stack, reducing latency and increasing service efficiency by ~35% in the operations of the client.</li>
                    <li>Created Patient Payments, Insurance, and Remittance features in the Bloominmind application employing Vue.JS and AWS.</li>
                    <li>Developed AWS Connect integrations with REST APIs for the backend to automate Call Center operations.</li>
                    <li>Designed Responsive User Interface and APIs for patients to manage appointments, billings, insurance and prescriptions.</li>
                    <li>Conducted Code Reviews and bug fixes and implemented code modularity to reduce redundancy by ~10%. </li>
                </ul>
            </div>
            <p className='Title-p'>Jun 2019 =&#62; Mar 2020 : Data Scientist</p>
            <p className='Content-p'>Dexler Energy Pvt. Ltd., Bengaluru, India</p>
            <div>
                <ul>
                    <li>Created Android Application to detect crop diseases/infections and aid farmers with data related to optimized farming practices. </li>
                    <li>Designed and developed backend REST APIs using Node.JS. Deployed APIs using GCP Cloud Functions and Firebase.</li>
                    <li>Managed Code Version Control using Github for staging and production servers and integrated with Gitlabs for CI/CD pipeline.</li>
                    <li>Assembled a dataset of ~1M images of plant diseases utilizing an array of pi-cameras in the field controlled by Raspberry Pi.</li>
                    <li>Developed Fast R-CNN to detect early onset of diseases in crops with an accuracy of ~97% and deployed on GCP Compute Engine.</li>
                </ul>
            </div>
            <p className='Title-p'>Oct 2018 =&#62; May 2019 : Data Scientist (Internship)</p>
            <p className='Content-p'>Dexler Holdings Pvt. Ltd., Bengaluru, India</p>
            <div>
                <ul>
                    <li>Developed Hydroponics Monitoring Web Application employing MERN stack to monitor growth of crops and harvest in real-time.</li>
                    <li>Assembled a dataset for monitoring the growth of 4 varieties of plants with ~100M data points utilizing pi-cameras, IoT sensors for measuring weather parameters, and nutrient parameters controlled by Raspberry Pi. </li>
                    <li>Conceived Crop Classification and Growth model with an accuracy of ~98% employing R-CNN and Support Vector Regression.</li>
                </ul>
            </div>
            <p className='Title-p'>Jun 2018 =&#62; Jul 2018 : Computer Vision Engineer (Internship)</p>
            <p className='Content-p'>DeepSight AI Labs Pvt. Ltd., Bengaluru, India</p>
            <div>
                <ul>
                    <li>Created Fire Localization algorithm utilizing Image processing and Security Threat Detection model by modifying YOLO v3.</li>
                    <li>Decreased run time of Object Detection model by making use of quantization technique.</li>
                </ul>
            </div>
            <p className='Title-p'>Aug 2017 =&#62; Nov 2017 : Full Stack Developer (Internship)</p>
            <p className='Content-p'>Mobijini (BizMobile IT Solutions), Bengaluru, India</p>
            <div>
                <ul>
                    <li>Created Orderjini (Warehouse order fulfillment application) using React Native.</li>
                    <li>Selected to participate in GITEX Future Stars 2017 in Dubai to showcase Orderjini Application from India.</li>
                </ul>
            </div>
            {/* <p className='Title-p'>May 2020 =&#62; Jul 2021 : Technical Lead - Full Stack Development</p>
            <p className='Content-p'>Bloominmind HealthTech Inc., Bengaluru, India</p>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}


        </div>
    )
}

export default Experience;