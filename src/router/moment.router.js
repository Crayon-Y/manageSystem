/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 16:27:57
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 16:35:20
 * @FilePath: \高级JavaScript\crayonWeb\src\router\moment.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const { create } = require('../controller/moment.controller')

const momentRouter = new KoaRouter({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)

module.exports = momentRouter