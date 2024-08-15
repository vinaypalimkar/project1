const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/jobs', (req, res) => {
    res.json([
        { id: 1, title: 'Software Engineer', company: 'Google' },
        { id: 2, title: 'Product Manager', company: 'Facebook' },
    ]);
});

app.get('/api/news', (req, res) => {
    res.json([
        { id: 1, title: 'CDAC wins award' },
        { id: 2, title: 'New Alumni Chapter' },
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/api/jobs', (req, res) => {
    res.json([
        { name: 'Google', url: 'https://www.google.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Microsoft', url: 'https://www.microsoft.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'Amazon', url: 'https://www.amazon.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Facebook', url: 'https://www.facebook.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
        { name: 'Apple', url: 'https://www.apple.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }
    ]);
});
