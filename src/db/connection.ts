import * as configs from '../../knexfile'
import { knex } from 'knex'
import { KnexConfig } from '../typings'
const environment: string = process.env.NODE_ENV || 'development'


const config = (configs as KnexConfig)[environment]

export default knex(config)