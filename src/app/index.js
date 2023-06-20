/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-30 15:24:53
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 15:35:07
 * @FilePath: \高级JavaScript\crayonWeb\src\app\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
// const useRouter = require('../router/user.router')
// const loginRouter = require('../router/login.router')
const registerRouters = require('../router/index')

const app = new Koa()

// 使useRouter生效
app.use(bodyParser())

registerRouters(app)
// app.use(useRouter.routes())
// app.use(useRouter.allowedMethods())
// app.use(loginRouter.routes())
// app.use(loginRouter.allowedMethods())

// app.use((ctx, next) => {
//   ctx.body = `server access successful`
// })

module.exports = app

