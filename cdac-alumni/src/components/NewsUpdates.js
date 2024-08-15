import React from 'react';
import newsImage1 from '../images/news-updates/news1.jpg'; // Import news image

function NewsUpdates() {
    return (
        <div className="content-box" id="news-updates">
            <h3>News and Updates</h3>
            <div className="scroll-container">
                <div className="scroll-content">
                    <a href="https://www.example.com/news1" target="_blank">
                        <img src={newsImage1} alt="News Image 1" />
                    </a>
                    {/* Add more images as needed */}
                </div>
            </div>
            <div className="news-text">
                <p>Text at the bottom right of the images</p>
            </div>
        </div>
    );
}

export default NewsUpdates;
