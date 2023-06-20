/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-19 15:04:41
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 15:23:08
 * @FilePath: \高级JavaScript\crayonWeb\src\router\login.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const { sign, test } = require('../controller/login.controller')
const { verifyLogin, verifyAuth } = require('../middleware/login.middleware')

const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post('/', verifyLogin, sign)
// 验证登录接口
loginRouter.get('/test', verifyAuth, test)


module.exports = loginRouter