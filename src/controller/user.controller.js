/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-30 15:57:27
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-31 18:49:31
 * @FilePath: \高级JavaScript\crayonWeb\src\controller\user.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const UserService = require('../service/user.service')

class UserController {
  async create (ctx, next) {
      // 1.获取用户传递过来的信息
    const user = ctx.request.body

    // 2. 将用户信息存储到数据库
    const result = await UserService.create(user)

    // 3.显示结果
    ctx.body = {
      message: '创建用户成功',
      data: result
    }
  }
}

module.exports = new UserController()