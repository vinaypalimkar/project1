import React from 'react';
import member1LinkedIn from '../images/latest-members/member1-linkedin.jpg'; // Import member's LinkedIn profile picture

/* Assuming you have profile pictures under latest-members folder: */

function LatestMembers() {
    return (
        <div className="content-box" id="latest-members">
            <h3>Latest Members</h3>
            <div className="member">
                <img src={member1LinkedIn} alt="Member 1 Profile" className="member-profile" />
                <div className="member-info">
                    <h4>Member 1 Name</h4>
                    <p>Current Job Role</p>
                    <a href="https://www.linkedin.com/member1" target="_blank">
                        <img src="linkedin-icon.png" alt="LinkedIn Icon" className="linkedin-icon" />
                    </a>
                </div>
            </div>
            {/* Add more members as needed */}
        </div>
    );
}

export default LatestMembers;
