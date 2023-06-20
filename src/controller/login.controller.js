/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 11:22:47
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 15:30:07
 * @FilePath: \高级JavaScript\crayonWeb\src\controller\login.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY, PUBLIC_KEY } = require('../config/secret')
// const { UNAUTHORIZATION } = require('../config/error-config')

class LoginController {
  // 登陆成功
  sign (ctx, next) {
    // 取出ctx中保存的user对象
    const { id, name } = ctx.user

    // 颁发令牌
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 24 * 60 * 60, // one day
      algorithm: 'RS256'
    })

    // 返回用户信息
    ctx.body = {
      code: 0,
      data: {
        token,
        id,
        name
      }
    }
  
    // 4.颁发令牌，传入token
  }

  test (ctx, next) {
    ctx.body = `interface can be requested`
  }
}

module.exports = new LoginController()