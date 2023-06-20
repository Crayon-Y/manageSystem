/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-31 18:47:32
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-31 23:05:38
 * @FilePath: \高级JavaScript\crayonWeb\src\middleware\user.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { NAME_OR_PASSWORD_IS_REQUIRED,
        USERNAME_ALREADY_EXISTS } = require('../config/error-config')

const UserService = require('../service/user.service')
const md5password = require('../utils/handle-password')

// 验证用户
const verifyUser = async (ctx, next) => {
    // 判断用户是否存在
    // 验证客户端的用户是否可以保存到数据库
    // 用户名和密码是否为空
    const { name, password } = ctx.request.body
    if (!name || !password) {
      // ctx.body = {
      //   code: -1001,
      //   message: '用户名和密码不能为空'
      // }

      // 这里传入的参数ctx 是为什么
      return ctx.app.emit('error1', NAME_OR_PASSWORD_IS_REQUIRED, ctx) 
    }

    // 用户名在数据库中已经存在
    const users = await UserService.findUserByName(name)
    if (users.length) {
      // ctx.body = {
      //   code: -1002,
      //   message: '用户名已经存在'
      // }
      return ctx.app.emit('error1', USERNAME_ALREADY_EXISTS, ctx)
    }

    // 执行下一个中间件
    await next()
}

// 处理密码
const handlePassword = async (ctx, next) => {
  // 取出密码
  const { password } = ctx.request.body

  // 加密
  ctx.request.body.password = md5password(password)

  // 执行下一个中间件
  await next()
}


module.exports = {
  verifyUser,
  handlePassword
}