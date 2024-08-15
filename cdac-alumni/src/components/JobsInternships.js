import React from 'react';
import company1Logo from '../images/jobs-internships/company1-logo.png'; // Import company logo

/* Assuming you have logos or images for different companies under jobs-internships folder: */

function JobsInternships() {
    return (
        <div className="content-box" id="jobs-internships">
            <h3>Jobs & Internships</h3>
            <ul className="company-list">
                <li>
                    <a href="https://www.company1.com" target="_blank">
                        <img src={company1Logo} alt="Company 1 Logo" className="company-icon" />
                        Company 1
                    </a>
                </li>
                {/* Add more companies as needed */}
            </ul>
        </div>
    );
}

export default JobsInternships;
