import * as path from 'path'
import { KnexConfig } from './src/typings'

const BASE_PATH = path.join(__dirname, 'src', 'db')

const development = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'wedding'
  },
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
}

const production = {
  client: 'pg',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

const knexConfig: KnexConfig = {
  development,
  production
}

module.exports = knexConfig
