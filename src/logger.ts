const levels = {
  off: 0,
  error: 1,
  warn: 2,
  info: 3,
  log: 4,
  debug: 5
}

export type LEVEL = keyof(typeof levels)

export interface LoggerOptions {
  level: LEVEL
  showLevel?: boolean
  label?: string
  console?: Console
  timestamp?: Boolean
}

const noLog = () => {}

export class Logger {
  readonly level: LEVEL
  private console: Console
  constructor (private readonly options: LoggerOptions) {
    this.console = options.console || console
    this.level = options.level
  }

  private _args(level: string): any[] {
    const args: any[] = []
    if (this.options.timestamp) {
      args.push(`[${(new Date()).toISOString()}]`)
    }

    if (this.options.label) {
      args.push(`[${this.options.label}]`)
    }

    if (this.options.showLevel) {
      args.push(`[${level.toUpperCase()}]`)
    }
    return args.length === 0 ? [] : [args.join('')]
  }

  get error() {
    if (levels.error > levels[this.level]) return noLog
    return this.console!.error.bind(this.console, ...this._args('error'))
  }

  get warn () {
    if (levels.warn > levels[this.level]) return noLog
    return this.console!.warn.bind(this.console, ...this._args('warn'))
  }

  get info () {
    if (levels.info > levels[this.level]) return noLog
    return this.console!.info.bind(this.console, ...this._args('info'))
  }

  get log () {
    if (levels.log > levels[this.level]) return noLog
    return this.console!.log.bind(this.console, ...this._args('log'))
  }

  get debug () {
    if (levels.debug > levels[this.level]) return noLog
    return this.console!.log.bind(this.console, ...this._args('debug'))
  }
}
