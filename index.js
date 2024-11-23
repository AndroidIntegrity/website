const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Android Integrity Alliance' });
});

app.get('/petition', (req, res) => {
    res.redirect('https://www.change.org/p/stop-google-from-limiting-custom-roms');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});