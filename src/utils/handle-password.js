/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-31 22:59:08
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-31 23:05:22
 * @FilePath: \高级JavaScript\crayonWeb\src\utils\handle-password.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const crypto = require('crypto')

function md5password (password) {
  // 创建md5方式的hash加密算法
  const md5 = crypto.createHash('md5')

  // hex 16进制
  const md5pwd = md5.update(password).digest('hex')

  return md5pwd
}

module.exports = md5password