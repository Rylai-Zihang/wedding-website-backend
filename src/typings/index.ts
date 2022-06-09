type HttpMethods = 'get' | 'post' | 'put' | 'delete'

interface KnexConfig {
  [key: string]: object
}

type Guest = {
    name: string,
    number?: number,
    extras?: string,
    need_accommodation?: boolean
}

export { HttpMethods, KnexConfig, Guest }
