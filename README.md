# delog.js

Logger library for Node.js and Browser.

```shell
npm install delog.js
```
## Usage

#### Node

```js
const logger = require('delog.js')

logger.default.error('Error message')
logger.default.warn('Warning message')
logger.default.info('Info message')
logger.default.log('Log message')
logger.default.debug('Debug message')

const log = new logger.Logger({ level: 'debug' })
log.error('Error message')
log.warn('Warning message')
log.info('Info message')
log.log('Log message')
log.debug('Debug message')
```

#### Browser

```js
// npm cdn
// <script src="https://unpkg.com/delog.js@:version/dist/index.umd.js"></script>

import { Logger } from 'delog.js'

const log = new Logger({ level: 'debug' })
log.error('Error message')
log.warn('Warning message')
log.info('Info message')
log.log('Log message')
log.debug('Debug message')
```

## Options

**LoggerOptions**

```ts
interface LoggerOptions {
  level: LEVEL; // Only those less than or equal to the current level will be printed.
  showLevel?: boolean; // Print level
  label?: string; // Add label
  console?: Console; // Use for node.js
  timestamp?: Boolean; // Print timestamp
}
```

**Level**

```js
const levels = {
  off: 0,
  error: 1,
  warn: 2,
  info: 3,
  log: 4,
  debug: 5
}
```

#### Log write to file

```js
const steam = fs.createWriteStream(path.resolve(__dirname, 'path-to-file/debug.log'), { flags: 'a+' })
const log = new logger.Logger({
    label: 'DEV',
    timestamp: true,
    level: 'debug',
    showLevel: true,
    console: new console.Console(steam, steam, true); // new Console
})

log.error('Error message')
log.warn('Warning message')
log.info('Info message')
log.log('Log message')
log.debug('Debug message')
```
