const connection = require('../app/database')

class PermissionService {
  async checkMomentService (momentId, userId) {
    // 通过检查两个id是否匹配得到是否拥有该权限
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [momentId, userId])
    return !!result.length // length > 0 authorized
  }

  async checkResourceService (resourceName, resourceId, userId) {
    // console.log(111)
    const statement = `SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [resourceId, userId])
    console.log(result)
    return !!result.length // length > 0 authorized
  }
}

module.exports = new PermissionService()