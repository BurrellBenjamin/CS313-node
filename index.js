const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000
const mysql = require('mysql');
const inboxController = require("./controllers/inboxControllers.js");
const accountController = require("./controllers/accountControllers.js");
var session = require('express-session');

const app = express();




app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, ''))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.get('/', (req, res) => res.render('public/home.html'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
app.get('/signup.html', (req, res) => res.render('public/signup.html'))
app.post('/login', async (req, res) => {
    accountController.login(req.body.user, req.body.password);
    res.render('views/inbox.ejs', {
        user: req.body.user,
        results : inboxController.loadInbox(user_name)
    });
})