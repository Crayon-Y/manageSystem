const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'crayon_node',
  user: 'root',
  password: '123456',
  connectionLimit: 5
})

// 获取连接是否成功
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log('get connection fail', err)
    return
  }

  // 尝试和数据库建立连接
  connection.connect(err => {
    if (err) {
      console.log('interact with database failing', err)
    } else {
      console.log('interact with database successful ~ ~')
    }
  })
})

// 获取连接池中连接对象
const connection = connectionPool.promise()


module.exports = connection