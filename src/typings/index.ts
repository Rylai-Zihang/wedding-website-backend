type HttpMethods = 'get' | 'post' | 'put' | 'delete'

interface KnexConfig {
  [key: string]: object
}

type Guest = {
    name: string,
    phone: string,
    extras?: number,
    need_accommodation?: boolean
}

export { HttpMethods, KnexConfig, Guest }
