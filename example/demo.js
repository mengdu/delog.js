const fs = require('fs')
const path = require('path')
const logger = require('..')

logger.default.error('Error message')
logger.default.warn('Warning message')
logger.default.info('Info message')
logger.default.log('Log message')
logger.default.debug('Debug message')

const steam = fs.createWriteStream(path.resolve(__dirname, 'test.log'), { flags: 'a+' })
const log = new logger.Logger({
    label: 'DEV',
    timestamp: true,
    level: 'debug',
    showLevel: true,
    // console: new console.Console(steam, steam, true)
})

log.error('Error message', {a: 1})
log.warn('Warning message', {a: 1})
log.info('Info message', {a: 1})
log.log('Log message', {a: 1})
log.debug('Debug message', {a: 1})

log.error('Exec result:', new Error('UNKNOW'))
