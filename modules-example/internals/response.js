function decrypt(data) {
    return "decrypted data"
}

// module.exports = function read() {
//     return decrypt("data")
// } --> CommonJS

function read() {
    return decrypt("data")
}

module.exports = {
    read
} // --> CommonJS export

// export {
//     read
// } // --> ES6 export
