const jwt = require('jsonwebtoken')
const { NAME_OR_PASSWORD_IS_REQUIRED,
        NAME_IS_NOT_EXISTS,
        PASSWORD_IS_INCORRECT, 
        UNAUTHORIZATION } = require("../config/error-config")
const { PUBLIC_KEY } = require('../config/secret')
const userService = require("../service/user.service")
const md5password = require("../utils/handle-password")

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body

  // 1. 判断用户名和密码是否为空
  if (!name || !password) {
    return ctx.app.emit('error1', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2.查询该用户是否在数据库中存在
  // findUserByName 函数为异步操作 所以需要加上await
  const users = await userService.findUserByName(name)
  // const users = userService.findUserByName(name)

  // 获取数组中查找到的名字
  const user = users[0]
  if (!user) {
    return ctx.app.emit('error1', NAME_IS_NOT_EXISTS, ctx)
  }
  // console.log(user)
  // 3.查询数据库中密码和用户传入的是否一致
  if (user.password !== md5password(password)) {
    return ctx.app.emit('error1', PASSWORD_IS_INCORRECT, ctx)
  }

  // 4.将user对象保存在ctx
  ctx.user = user

  // 执行next 下一个中间件
  await next()
}

const verifyAuth = async (ctx, next) => {
  // 1.获取token
  const authorization = ctx.headers.authorization
  // console.log(authorization, 'authorization')

  if (!authorization) {
    return ctx.app.emit('error1', UNAUTHORIZATION, ctx)
  }

  const token = authorization.replace('Bearer ', '')

  // 2. 验证token是否有效
  try {
    // 获取token的信息
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })  
    console.log(3)
    // 将获取的token信息保留下来
    ctx.user = result

    console.log(result, 'result')

    // ctx.body = `interface can be requested`
    // 执行下一个中间件
    await next()
  } catch (error) {

    console.log(error, 2)
    ctx.app.emit('error1', UNAUTHORIZATION, ctx)
  }  
}

module.exports = { 
  verifyLogin,
  verifyAuth }