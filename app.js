const Koa = require('koa');
const static = require('koa-static-router')
const app = new Koa()

const special = require('./routes/special')
const articles = require('./routes/articles')
const uploads= require('./routes/uploads')
const users = require('./routes/users')
const cors = require('@koa/cors');

app.use(cors());
app.use(special.routes())
app.use(articles.routes())
app.use(users.routes())
app.use(uploads.routes())
// app.use(static({dir:'docs', router: '/doc/'}))
// app.use(cors({
//   origin: 'https://client.alexyu22.repl.co',    
//   credentials: true
// }));
module.exports = app;
