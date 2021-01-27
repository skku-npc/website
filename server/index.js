import express from 'express'
import path from 'path'

const app = express()
const port = 4000

app.use(express.static(path.join(path.resolve(), 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`Example express app listening at http://localhost:${port}`)
})
