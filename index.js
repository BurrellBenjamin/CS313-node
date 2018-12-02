const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.get('/', (req, res) => res.render('public/home.html'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
app.get('/signup.html', (req, res) => res.render('public/signup.html'))
