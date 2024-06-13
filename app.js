const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000
const indexRouter = require('./routes/index-router')
const db = require('./config/mongoose.connection')
const sellerRouter = require('./routes/seller-router')
const flash = require('connect-flash')
const expressSession = require('express-session')

app.set('views', path.join((__dirname), 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash())
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'hello'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', indexRouter)
app.get('/access', indexRouter)
app.post('/register', indexRouter)
app.post('/login', indexRouter)
app.get('/logout', indexRouter)
app.get('/dashboard', sellerRouter)
app.post('/push', sellerRouter)
app.get('/sellershub', sellerRouter)
app.get('/plusproducts', sellerRouter)
app.post('/sellersign', sellerRouter)
app.get('/products/:id', indexRouter)
app.get('/clothings/:category', indexRouter)
app.get('/fits/:gender', indexRouter)
app.get('/login', indexRouter)
app.post('/add-to-cart/:id', indexRouter)
app.get('/cart', indexRouter)
app.get('/remove-from-cart/:id', indexRouter)
app.get('/add-quantity/:id', indexRouter)
app.get('/sub-quantity/:id', indexRouter)
app.get('/checkout/:id', indexRouter)
app.post('/order/:id', indexRouter)
app.get('/success-checkout', indexRouter)
app.get('/orders', indexRouter)

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})