/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-30 15:20:17
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-31 22:55:52
 * @FilePath: \高级JavaScript\crayonWeb\src\router\user.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const userController = require('../controller/user.controller')

// 创建路由对象
const useRouter = new KoaRouter({ prefix: '/users' })

const { verifyUser,
        handlePassword } = require('../middleware/user.middleware')

// 定义路由中的映射
// 用户注册
useRouter.post('/', verifyUser, handlePassword, userController.create)

// useRouter.post('/', (ctx, next) => {
// })

// 导出路由
module.exports = useRouter