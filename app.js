const reactSsr = require('./dist/src/server/middlewares/react-ssr').default

const Koa = require('koa2')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()

app.use(KoaStatic(
  path.join(__dirname, './dist/static')
))
console.log(path.join(__dirname, './dist/static'))

app.use(reactSsr)

app.listen(9001)
console.log('server started at 9001')