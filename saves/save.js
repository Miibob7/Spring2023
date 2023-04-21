import express from 'express'
import redis from 'redis'
const app = express()
const port = 80

app.get('/save/:number', async (req, res) => {
    await db.set("thenumber", req.params.number)
    res.send ("OK")
    })
    app.get('/showme', async (req, res) => {
        const number = await db.get("thenumber")
    res. send(`<!DOCTYPE html><html><body>${number}</body></html>`)
    })
    const db = redis.createClient({
    url: 'redis://localhost:6379'
}); 
await db.connect()
app.use(express.static('week07/public'))
 app.get('/', async(req, res) => {
    const count = await db.incr("count")
    res.send(`count: ${count}`)
})





const count = await db.incr("count")
    res.send(`count: ${count}`)