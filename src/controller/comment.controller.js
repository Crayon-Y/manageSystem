/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-21 15:27:54
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 16:47:21
 * @FilePath: \高级JavaScript\crayonWeb\src\controller\comment.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commentService = require("../service/comment.service")

class CommentController {
  async create (ctx, next) {
    // 1.获取body中的参数
    // content 评论的内容
    // 评论目标的id
    const { content, momentId } = ctx.request.body
    
    // 用户id
    const { id } = ctx.user

    // sql
    const result = await commentService.create(content, momentId, id)

    ctx.body = {
      code: 0,
      message: '发表动态成功',
      data: result
    }
  }

  async replay (ctx, next) {
    const { content, momentId, commentId } = ctx.request.body

    const { id } = ctx.user

    // console.log(content, momentId, commentId, id)
    const result = await commentService.reply(content, momentId, commentId, id)


    ctx.body = {
      code: 0,
      message: '回复评论成功',
      data: result
    }
  }
}

module.exports = new CommentController()