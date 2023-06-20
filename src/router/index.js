/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-20 15:31:23
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-20 15:45:53
 * @FilePath: \高级JavaScript\crayonWeb\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')

// 自动化注册所有路由
function registerRouters (app) {
  // 1.读取当前文件夹下的所有文件
  const files = fs.readdirSync(__dirname)
  console.log(files)

  // 2.遍历所有的文件
  for (const file of files) {
    if (!file.endsWith('.router.js')) continue
    // 获取所有.router.js结尾的文件
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }

}

module.exports = registerRouters