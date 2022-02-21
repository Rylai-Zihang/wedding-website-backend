import * as PgSQL from 'pg'

const pool = new PgSQL.Pool({
  host: 'localhost',
  user: 'postgres',
  password: '12345',
  database: 'wedding'
})

function query(sql: string) {
  return new Promise((resolve, reject) => {
    pool.connect(async (err, connection) => {
      const result = await connection.query(sql)
      if (result) {
        resolve(result)
      } else {
        reject(err)
      }
      connection.release()
    })
  })
}

export { query }
