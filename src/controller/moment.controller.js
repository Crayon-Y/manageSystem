const momentService = require("../service/moment.service")

/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 16:35:31
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 18:16:46
 * @FilePath: \高级JavaScript\crayonWeb\src\controller\moment.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MomentController {
  async create (ctx, next) {
    // 1.获取发表的动态内容
    const { content } = ctx.request.body

    // console.log(ctx.user, 'ctx.user', content)
    const { id } = ctx.user

    // 将动态相关数据存储到数据库
    const result = await momentService.create(content, id)

    ctx.body = {
      code: 0,
      message: '创建用户动态成功~',
      data: result
    }
  }
}

module.exports = new MomentController()