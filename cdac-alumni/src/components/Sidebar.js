import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <h3>Connect with your classmates on your alumni portal</h3>
            <ul className="sidebar-options">
                <li><button>Create your Profile</button></li>
                <li><button>Post Jobs and Internships</button></li>
                <li><button>Share Memories</button></li>
                <li><button>Exchange Opportunities</button></li>
            </ul>
            <div className="social-login">
                <button className="social-login-btn">Login with Facebook</button>
                <button className="social-login-btn">Login with LinkedIn</button>
                <button className="social-login-btn">Login with Google</button>
            </div>
        </div>
    );
}

export default Sidebar;
