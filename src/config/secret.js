/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 14:11:53
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 14:46:41
 * @FilePath: \高级JavaScript\crayonWeb\src\config\secret.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const path = require('path')

// 默认情况下相对目录和node程序的启动目录有关系
// 此处的相对路径 因为npm启动项目的路径原因 所以相对路径其实是./src
// const PRIVATE_KEY = fs.readFileSync('./src/config/keys/private.key')
// const PUBLIC_KEY = fs.readFileSync('./src/config/keys/public.key')

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))

module.exports = {
  PRIVATE_KEY,
  PUBLIC_KEY
}