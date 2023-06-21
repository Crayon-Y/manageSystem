/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-21 13:33:22
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-21 15:10:39
 * @FilePath: \高级JavaScript\crayonWeb\src\middleware\permission.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { OPERATION_IS_NOT_ALLOWED } = require("../config/error-config")
const permissionService = require("../service/permission.service")

// const verifyMomentPermisson = async (ctx, next) => {
//   // 1.获取登陆用户的id & 修改的动态的id
//   const { momentId } = ctx.params
//   console.log(ctx, 'ctx')
//   const { id } = ctx.user

//   // 2.查询user的id是否有修改momentId的权限
//   const isPermission = await permissionService.checkMomentService(momentId, id)
//   if (!isPermission) {
//     return ctx.app.emit('error1', OPERATION_IS_NOT_ALLOWED, ctx)
//   }

//   await next()
// }

// 另一种实现思路
// const verifyPermisson = function (table_name) {
//   return async (ctx, next) => {
//     // 1.获取登陆用户的id & 修改的动态的id
//     const { momentId } = ctx.params
//     console.log(ctx, 'ctx')
//     const { id } = ctx.user
  
//     // 2.查询user的id是否有修改momentId的权限
//     const isPermission = await permissionService.checkMomentService(momentId, id)
//     if (!isPermission) {
//       return ctx.app.emit('error1', OPERATION_IS_NOT_ALLOWED, ctx)
//     }
  
//     await next()
//   }
// }

// 权限判断让适用于所有的操作 不仅仅是moment操作
const verifyPermisson = async (ctx, next) => {
  const { id } = ctx.user

  // 1.获取资源的名称(表名/操作名)和id
  // console.log(ctx.params, 'ctx')
  // console.log(Object.keys(ctx.params), 'Object.keys(ctx.params)')
  // params: { momentId: 4 }
  // keyName --> momentId
  const keyName = Object.keys(ctx.params)[0]
  const resourceId = ctx.params[keyName] // 4
  const resourceName = keyName.replace('Id', '') // moment

  // console.log(resourceId, resourceName, id)
  // 2.查询user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkResourceService(resourceName, resourceId, id)
  
  if (!isPermission) {
    return ctx.app.emit('error1', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  await next()
}
  

module.exports = {
  // verifyMomentPermisson
  verifyPermisson
}