const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.type('text/plain')
    res.send('About Meaklark Travel')
})

app.get('/about', (req, res) =>{
    res.type('text/plain')
    res.send('About Meaklark Travel')
})

//custom 404
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
})

//custom 500
app.use((err, req, res, next) =>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 -server error')
})
app.listen(porrt, () => console.log(
    `Express started on http://localhost:${port}; `
    `press Ctrl-C to terminate. `
))