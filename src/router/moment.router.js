/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 16:27:57
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 14:48:39
 * @FilePath: \高级JavaScript\crayonWeb\src\router\moment.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login.middleware')
const { create, list, detail, update, remove } = require('../controller/moment.controller')
const { verifyPermisson } = require('../middleware/permission.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 发表动态
momentRouter.post('/', verifyAuth, create)
// 查询动态
momentRouter.get('/', list)
// 获取某条动态
momentRouter.get('/:momentId', detail)
// // 删除某条动态
// momentRouter.delete('/:momentId', verifyAuth, verifyMomentPermisson, remove)
// // 修改某条动态
// // 只有登录的用户才能修改动态
// momentRouter.patch('/:momentId', verifyAuth, verifyMomentPermisson, update)

// 删除某条动态
momentRouter.delete('/:momentId', verifyAuth, verifyPermisson, remove)
// 修改某条动态
// 只有登录的用户才能修改动态
momentRouter.patch('/:momentId', verifyAuth, verifyPermisson, update)

module.exports = momentRouter