
import React from 'react';
import testimonial1Video from '../images/distinguished-alumni/testimonial1-video.mp4'; // Import testimonial video

/* Assuming you have testimonial videos or images under distinguished-alumni folder: */ 

function DistinguishedAlumni() {
    return (
        <div className="content-box" id="distinguished-alumni">
            <h3>Distinguished Alumni (Text & Videos)</h3>
            <div className="testimonial">
                <video controls>
                    <source src={testimonial1Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Add more testimonials as needed */}
            </div>
        </div>
    );
}

export default DistinguishedAlumni;
