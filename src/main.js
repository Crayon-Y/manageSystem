/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-29 18:34:43
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-31 19:01:40
 * @FilePath: \高级JavaScript\crayonWeb\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const app = require('./app')

const { SERVER_PORT } = require('./config/server')
// 使文件中的代码执行一次
require('./utils/handle-error')


app.listen(SERVER_PORT, () => {
  console.log('koa server startup successful')
})