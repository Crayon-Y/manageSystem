/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-31 18:59:45
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 14:11:51
 * @FilePath: \高级JavaScript\crayonWeb\src\utils\handle-error.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED,
        USERNAME_ALREADY_EXISTS, 
        NAME_IS_NOT_EXISTS,
        PASSWORD_IS_INCORRECT, 
        UNAUTHORIZATION, 
        OPERATION_IS_NOT_ALLOWED } = require('../config/error-config')

app.on('error1', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名和密码不能为空, 请重新输入'
      break
    case USERNAME_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经存在, 请修改用户名'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '登录的用户不存在, 请检查用户名'
      break
    case PASSWORD_IS_INCORRECT:
      code = -1004
      message = '密码不正确, 请检查密码'
      break
    case UNAUTHORIZATION:
      code = -1004
      message = '无效的token, 或者token已经过期'
      break
    case OPERATION_IS_NOT_ALLOWED: 
      code = -1005
      message = '没有此操作权限'
      break
  }

  ctx.body = { code, message }
})