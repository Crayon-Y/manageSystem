/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-21 16:17:29
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 16:45:39
 * @FilePath: \高级JavaScript\crayonWeb\src\service\comment.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const connection = require('../app/database')

class CommentService {
  async create (content, momentId, userId) {
    // 发布评论
    // content 内容
    // momentId 评论的动态的id
    // userId 评论的人
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, userId])
    return result
  }

  async reply (content, momentId, commentId, userId) {
    // 发布评论
    // content 内容
    // momentId 评论的动态的id
    // userId 评论的人
    const statement = `INSERT INTO comment (content, moment_id, comment_id, user_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, momentId, commentId, userId])
    return result
  }
}

module.exports = new CommentService()