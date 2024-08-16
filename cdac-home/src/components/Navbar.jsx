

import React from 'react';

import { Button, Image } from 'antd';
import './Navbar.css'
const headerContainer = {
  width: '100%',
  padding: '5px',
  border: '5px solid red'
};
const headerUpper = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '5px solid pink'
};

const headerUpperImage = {
  paddingLeft: '200px',
};

const headerLower = {
  width: '100%',
  padding: '1px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'orange',
  // border: '5px solid pink',
};

const Navbar = () => (
        <div style={headerContainer}>
            
            <div style={headerUpper}>
                    <div  style={headerUpperImage}>
                    <Image width={100} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    </div>
                    <div class="">
                        <Button type='link' href="https://www.facebook.com/your-alumni-page">Facebook</Button>
                        <Button type='link' href="https://www.linkedin.com/company/your-alumni-page" >LinkedIn</Button>
                        <Button type="link">Register</Button>
                        <Button type="link">Login</Button>
                    </div>
            </div>

            <div style={headerLower}>
              <nav>
                <ul class="nav-links">
                    <li><a href="#">Home Page</a></li>
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
            </div>
        </div>
);
export default Navbar;
 