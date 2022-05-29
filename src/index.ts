import { Logger } from './logger'
export * from './logger'

const std = new Logger({ level: 'debug' })
export default std
