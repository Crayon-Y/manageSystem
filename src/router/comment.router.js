/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-21 15:25:19
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 16:27:42
 * @FilePath: \高级JavaScript\crayonWeb\src\router\comment.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const { create, replay } = require('../controller/comment.controller')

const commentRouter = new KoaRouter({ prefix: '/comment' })

// 新增评论
commentRouter.post('/', verifyAuth, create)
// 回复评论的评论
commentRouter.post('/replay', verifyAuth, replay)

module.exports = commentRouter