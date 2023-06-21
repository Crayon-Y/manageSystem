const connection = require("../app/database")

class MomentService {
  async create (content, userId) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }

  // offset size 传入默认值
  async queryList (offset = 0, size = 10) {
    // const statement =  `SELECT * FROM moment LIMIT ? OFFSET ?;`
    const statement = `
      SELECT
        m.id id , m.content content, m.createAt createTime, m.updateAt updateTime, 
        JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) author
      FROM moment m
      LEFT JOIN user u ON u.id = m.user_id
      LIMIT ? OFFSET ?
      `;
    const [result] = await connection.execute(statement, [String(size),String(offset)])
    // console.log(result, 'result')
    return result
  }

  // 获取某条动态详情
  async queryMomentById (momentId) {
    const statement = `
      SELECT
        m.id id , m.content content, m.createAt createTime, m.updateAt updateTime, 
        JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) author
      FROM moment m
      LEFT JOIN user u ON u.id = m.user_id
      WHERE m.id = ?
    `;
    const [result] = await connection.execute(statement, [momentId])
    return result
  }

  // 修改动态
  async updateMoment (content, momentId) {
    const statement = `UPDATE moment set content = ? WHERE id = ?; `;
    const [result] = await connection.execute(statement, [content, momentId])
    return result
  }

  // 删除动态
  async removeMoment (momentId) {
    const statement = `DELETE FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [momentId])
    return result
  }
}

module.exports = new MomentService()