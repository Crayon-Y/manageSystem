/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-30 16:07:00
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 13:45:44
 * @FilePath: \高级JavaScript\crayonWeb\src\service\user.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const connection = require('../app/database')

class UserService {
  async create (user) {
    // 1. 获取用户
    const { name, password } = user

    // 2. 拼接statement
    const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'

    // 3.执行sql语句
    // 异步操作
    const result = await connection.execute(statement, [name, password])
    // console.log([result])

    return result[0]

  }

  async findUserByName (name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?;'
    // [values] 解构出第一项
    const [values] = await connection.execute(statement, [name])
    console.log(typeof values[0], 'values')
    // console.log(values, 'values')
    return values
  }
}

module.exports = new UserService()