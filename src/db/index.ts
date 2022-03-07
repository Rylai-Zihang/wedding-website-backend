import * as PgSQL from 'pg'

const pool = new PgSQL.Pool({
  host: 'db',
  user: 'postgres',
  password: '2300',
  database: 'wedding',
  port: 5432
})

function query(sql: string) {
  return new Promise((resolve, reject) => {
    console.log('connecting db')
    pool.connect(async (err, connection) => {
      console.log(err, connection)
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
