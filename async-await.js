// // ASYNC AWAIT

// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'))

// async function playerStart() {
//     const first = await movePlayer(100, 'Left') //pause
//     const second = await movePlayer(400, 'Left') //pause
//     await movePlayer(10, 'Right') //pause
//     await movePlayer(330, 'Left') //pause
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(console.log)

// async function fetchUser() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json()
//     console.log(data)
// }

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
]

// Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
//     .then((array) => {
//         console.log("users", array[0])
//         console.log("posts", array[1])
//         console.log("albums", array[2])
//     })
//     .catch("oops")

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map((url) => fetch(url).then((resp) => resp.json()))
        )
        console.log("users", users)
        console.log("posts", posts)
        console.log("albums", albums)
    } catch (err) {
        console.log("oops", err)
    }
}

// getData()

const loopThroughUrls = (url) => {
    for (url of urls) {
        console.log(url)
    }
}

const getData2 = async function () {
    const arrayOfPromises = urls.map((url) => fetch(url))
    for await (let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data)
    }
}

getData2()
