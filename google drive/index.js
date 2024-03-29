const express = require('express')
const homeRouter = require('./routes/home')
const authRouter = require('./routes/auth')
const passportConfig = require('./configs/passport')
const passport = require('passport')
const cookieSession = require('cookie-session')
const KEYS = require('./configs/keys')
const nunjucks = require('nunjucks')
const fileUpload = require('express-fileupload')
var cors = require('cors')
// init app
let app = express()
const port = 3333 || process.env.PORT
app.listen(port, () => console.log(`server is running on ${port}`))

// init view
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(cors())
app.options('*', cors())
// init static
app.use('/static', express.static('public'))


// init session
app.use(cookieSession({
    keys: [KEYS.session_key]
}))

// init passport
app.use(passport.initialize())
app.use(passport.session())

// file upload
app.use(fileUpload());

// init routes
app.use('', homeRouter) // home
app.use('/auth', authRouter) // auth
