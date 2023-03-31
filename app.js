const path = require('path')
const express = require('express')
const expressHbs = require('express-handlebars')
const app = express()



app.set('view engine','ejs')
app.set('views', 'views')


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser') 
const errorController =require('./controllers/404')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))
app.use('/admin',adminRoutes)
app.use(shopRoutes)
// app.use((req, res, next) =>{
//     // console.log('in the middleware');
//     next()
// })
app.use(errorController.errorPage)
app.listen(3000)







// server.listen(3000);
// =>{
//     // console.log(req.url, req.method, req.headers);
//     // process.exit()
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html>')
//     res.write('<header><title>My First Page</title></header>')
//     res.write('<body>HELLO WALID!</body>')
//     res.write('</html>')
//     res.end()
// })
// const { parse } = require('path')