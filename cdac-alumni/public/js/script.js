// Immediately Invoked Function Expression (IIFE)
(function() {
    // Animate scrolling to sections
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });


// News updates slideshow
const newsUpdates = document.querySelector('#news-updates');
const newsItems = newsUpdates.querySelectorAll('.news-item');

setInterval(() => {
    newsItems.forEach(item => item.style.display = 'none');
    newsItems[0].style.display = 'block';
    newsUpdates.appendChild(newsItems[0]);
}, 5000);

// Distinguished alumni testimonials slideshow
const testimonials = document.querySelector('#distinguished-alumni .testimonials');
const testimonialItems = testimonials.querySelectorAll('.testimonial');

setInterval(() => {
    testimonialItems.forEach(item => item.style.display = 'none');
    testimonialItems[0].style.display = 'block';
    testimonials.appendChild(testimonialItems[0]);
}, 5000);

// Latest members grid
const latestMembers = document.querySelector('#latest-members');
const memberItems = latestMembers.querySelectorAll('.member');

memberItems.forEach(item => {
    item.style.width = 'calc(20% - 20px)';
    item.style.margin = '10px';
});

// Footer animation
footer = document.querySelector('footer');

footer.addEventListener('mouseover', () => {
    footer.style.transform = 'translateY(-10px)';
    footer.style.transition = '0.5s';
});

footer.addEventListener('mouseout', () => {
    footer.style.transform = 'translateY(0)';
    footer.style.transition = '0.5s';
});

// News updates slideshow animation
newsSlideshow = document.querySelector('#news-updates .scroll-content');

newsSlideshow.addEventListener('animationiteration', () => {
    newsSlideshow.style.animation = 'none';
    setTimeout(() => {
        newsSlideshow.style.animation = 'scrollLeft 10s linear infinite';
    }, 1000);
});

// Distinguished alumni testimonials slideshow animation
testimonialsSlideshow = document.querySelector('#distinguished-alumni .testimonials');

testimonialsSlideshow.addEventListener('animationiteration', () => {
    testimonialsSlideshow.style.animation = 'none';
    setTimeout(() => {
        testimonialsSlideshow.style.animation = 'scrollLeft 10s linear infinite';
    }, 1000);
});

// Latest members grid animation
memberGrid = document.querySelector('#latest-members .member-grid');

memberGrid.addEventListener('mouseover', () => {
    memberGrid.style.transform = 'scale(1.1)';
    memberGrid.style.transition = '0.5s';
});

memberGrid.addEventListener('mouseout', () => {
    memberGrid.style.transform = 'scale(1)';
    memberGrid.style.transition = '0.5s';
});

// Footer animation
footer = document.querySelector('footer');

footer.addEventListener('animationend', () => {
    footer.style.transform = 'translateY(0)';
});

// Navigation menu toggle
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navigation menu close on click
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
    }
});

// Navigation menu toggle button event listener
document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Window scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        document.getElementById('header').classList.add('fixed');
    } else {
        document.getElementById('header').classList.remove('fixed');
    }
});

// News updates slideshow animation
const newsSlideshow = document.querySelector('#news-updates .scroll-content');

newsSlideshow.addEventListener('animationiteration', () => {
    newsSlideshow.style.animation = 'none';
    setTimeout(() => {
        newsSlideshow.style.animation = 'scrollLeft 10s linear infinite';
    }, 1000);
});

// Distinguished alumni testimonials slideshow animation
const testimonialsSlideshow = document.querySelector('#distinguished-alumni .testimonials');

testimonialsSlideshow.addEventListener('animationiteration', () => {
    testimonialsSlideshow.style.animation = 'none';
    setTimeout(() => {
        testimonialsSlideshow.style.animation = 'scrollLeft 10s linear infinite';
    }, 1000);
});

// Latest members grid animation
const memberGrid = document.querySelector('#latest-members .member-grid');

memberGrid.addEventListener('mouseover', () => {
    memberGrid.style.transform = 'scale(1.1)';
    memberGrid.style.transition = '0.5s';
});

memberGrid.addEventListener('mouseout', () => {
    memberGrid.style.transform = 'scale(1)';
    memberGrid.style.transition = '0.5s';
});

// Footer animation
const footer = document.querySelector('footer');

footer.addEventListener('animationend', () => {
    footer.style.transform = 'translateY(0)';
});

// Window load event listener
window.addEventListener('load', () => {
    // Animate the header
    document.getElementById('header').style.animation = 'slideDown 1s ease-in-out';
    // Animate the footer
    document.querySelector('footer').style.animation = 'slideUp 1s ease-in-out';
});

// Footer animation
let footerElement = document.querySelector('footer');

footerElement.addEventListener('mouseover', () => {
    footerElement.style.transform = 'translateY(-10px)';
    footerElement.style.transition = '0.5s';
});

footerElement.addEventListener('mouseout', () => {
    footerElement.style.transform = 'translateY(0)';
    footerElement.style.transition = '0.5s';
});


// Feedback modal
const feedbackButton = document.getElementById('feedback');
const feedbackModal = document.getElementById('feedback-modal');

feedbackButton.addEventListener('click', () => {
    feedbackModal.classList.add('show');
});

feedbackModal.addEventListener('click', (e) => {
    if (e.target === feedbackModal) {
        feedbackModal.classList.remove('show');
    }
});
})();

// jQuery code (if needed)
$(document).ready(function() {
    $('body').on('click', '#feedback', async function(e) {
        e.preventDefault();
        try {
            const response = await fetch('../feedback');
            const data = await response.text();
            $('#feedback-modal').html(data);
            $('#feedback-modal-form').modal('show');
        } catch (error) {
            console.error(error);
        }
    });
});

