// // THREAD
// var worker = new Worker('worker.js')
// worker.postMessage('Hellloooo')
//
// addEventListener('message')

// CONCURRENCY & PARALELLISM ON SINGLE THREAD NODE
const { spawn } = require("child_process")
spawn("git", ["stuff"])
