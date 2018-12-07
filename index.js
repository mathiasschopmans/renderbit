export default class Renderbit {
    async render (url, options) {
        console.log(`Renderbit::render(${url},`, options, ')')
        return new Promise((resolve) => { setTimeout(() => {
            console.log(`Renderbit::render(${url}) done.`)
            resolve()
        }, 1000)})
    }
}