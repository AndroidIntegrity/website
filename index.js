const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(compression());
app.use('/res', expressStaticGzip(path.join(__dirname, 'public'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
}));

app.get('/', (req, res) => {
    res.render('index', { title: 'Android Integrity Alliance' });
});

app.get('/team', (req, res) => {
    res.render('team', { title: 'Team | Android Integrity Alliance' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact | Android Integrity Alliance' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About | Android Integrity Alliance' });
});

app.get('/petition', (req, res) => {
    res.redirect('https://www.change.org/p/stop-google-from-limiting-custom-roms');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});