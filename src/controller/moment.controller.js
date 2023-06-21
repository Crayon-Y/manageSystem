/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 16:35:31
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 14:20:47
 * @FilePath: \高级JavaScript\crayonWeb\src\controller\moment.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const momentService = require("../service/moment.service")

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

  async list (ctx, next) {
    // 分页查询数据 获取offset/size
    const { offset, size } = ctx.query

    const result = await momentService.queryList(offset, size)
    // 返回数据
    ctx.body = {
      code: 0,
      data: result
    }
  }

  async detail (ctx, next) {
    // 1.获取动态id
    // {{baseurl}}/moment/1
    const { momentId } = ctx.params

    // 2.根据id查询动态详情
    const result = await momentService.queryMomentById(momentId)

    ctx.body = {
      code: 0,
      data: result[0]
    }
  }

  async remove (ctx, next) {
    //1.获取要删除的动态的id
    const { momentId } = ctx.params

    // 2.执行数据库操作
    const result = momentService.removeMoment(momentId)

    ctx.body = {
      code: 0,
      message: '删除动态成功',
      data: result
    }
  }

  async update (ctx, next) {
    // 获取要修改的动态的id
    const {momentId} = ctx.params

    // 修改的内容
    const { content } = ctx.request.body

    const result = await momentService.updateMoment(content, momentId)
    
    ctx.body = {
      code: 0,
      message: '动态修改成功',
      data: result
    }
  }
}

module.exports = new MomentController()