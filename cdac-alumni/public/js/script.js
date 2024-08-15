document.addEventListener('DOMContentLoaded', function() {
    // Function to handle vertical scrolling images
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContent = document.querySelector('.scroll-content');
    const images = document.querySelectorAll('.scroll-content img');
    let totalHeight = 0;

    // Calculate total height of all images
    images.forEach(image => {
        totalHeight += image.offsetHeight;
    });

    // Clone the scroll content to create a continuous scroll effect
    const clone = scrollContent.cloneNode(true);
    scrollContainer.appendChild(clone);

    let startPos = 0;
    let currentPos = startPos;

    // Function to animate vertical scrolling
    function scrollImages() {
        currentPos -= 1;
        if (currentPos <= -totalHeight) {
            currentPos = startPos;
        }
        scrollContent.style.transform = `translateY(${currentPos}px)`;
        clone.style.transform = `translateY(${currentPos + totalHeight}px)`;
        requestAnimationFrame(scrollImages);
    }

    // Start the scrolling animation
    scrollImages();

    // Fetch job listings from backend
    fetch('/api/jobs')
        .then(response => response.json())
        .then(data => {
            const jobsList = document.querySelector('.jobs-list');
            // Populate job listings dynamically
            data.forEach(job => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="${job.url}" target="_blank">
                        <img src="${job.icon}" alt="${job.name}" class="company-icon">
                        ${job.name}
                    </a>
                `;
                jobsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching jobs:', error));

    // Function to handle horizontal scrolling news items
    const scrollContentNews = document.querySelector('#news-updates .scroll-content');
    const newsItems = document.querySelectorAll('#news-updates .news-item');
    let totalWidth = 0;

    // Calculate total width of all news items
    newsItems.forEach(item => {
        totalWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight);
    });

    // Clone the scroll content to create a continuous scroll effect
    const cloneNews = scrollContentNews.cloneNode(true);
    scrollContentNews.appendChild(cloneNews);

    let startPosNews = 0;
    let currentPosNews = startPosNews;

    // Function to animate horizontal scrolling
    function scrollNews() {
        currentPosNews -= 1;
        if (currentPosNews <= -totalWidth) {
            currentPosNews = startPosNews;
        }
        scrollContentNews.style.transform = `translateX(${currentPosNews}px)`;
        cloneNews.style.transform = `translateX(${currentPosNews + totalWidth}px)`;
        requestAnimationFrame(scrollNews);
    }

    // Start the scrolling animation for news items
    scrollNews();
});
