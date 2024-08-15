import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="ACTS CDAC Hyderabad Logo" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contribute</a></li>
                    <li><a href="#">Alumni Testimonials</a></li>
                    <li><a href="#">Engage</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </nav>
            <div className="social-auth">
                <div className="follow-us">
                    Follow us:
                    <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin-icon.png" alt="LinkedIn" />
                    </a>
                </div>
                <div className="auth-links">
                    <a href="#">Register</a> :: <a href="#">Login</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
