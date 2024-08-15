import React from 'react';
import welcomeImage1 from '../images/welcome-note/image1.jpg'; // Import your image

function WelcomeNote() {
    return (
        <section id="welcome-note">
            <h2>Welcome note with scrolling pictures (Buildings, Group photos, Alumni meets & etc)</h2>
            <img src={welcomeImage1} alt="Welcome Image 1" />
            {/* Additional content as needed */}
        </section>
    );
}

export default WelcomeNote;
