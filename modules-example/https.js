const { send, read } = require('./internals') // --> importing folder won't work unless you create index.js in that folder with module.exports pointing to module being exported from that folder

// const { send } = require('./internals/request') // --> CommonJS import
// import { send } from './request.mjs' // --> ES6 import
// const { read } = require('./internals/response') // --> CommonJS import
// import { read } from './response.mjs' // --> ES6 import
// import { REQUEST_TIMEOUT } from './request.js' // --> ES6 import

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest('https://google.com', 'hello')
console.log(responseData)
// console.log(require.cache) // --> require implemented cache so it won't load twice globally