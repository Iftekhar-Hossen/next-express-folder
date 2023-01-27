const express = require("express")
const next = require("next")
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev })
const handle = server.getRequestHandler();

server.prepare().then(() => {
    const app = express()
    const { readdirSync } = require("fs")
    const PORT = process.env.PORT || 3000

    readdirSync("./pages/api").map((file) => {
        app.use("/api", require(`./pages/api/${file}`))
    })


    app.get('/api/*', function (req, res) {
        res.status(404).send('Invalid route');
    });

    app.use(handle)


    app.listen(PORT, () => {
        console.log(`App is listing on port ${PORT}`)
    })
})