import express from 'express'
import redis from 'redis'
const app = express()
const port = 80

const db = redis.createClient({
    url: 'redis://localhost:6379'
}); 
await db.connect()


app.get('/save/:number', async (req, res) => {
    await db.set("thenumber", req.params.number)
    res.send ("OK")
    })

    res. send(`<!DOCTYPE html><html><body>${number}</body></html>`)
})


app.use(express.static('week07/public'))
 app.get('/', async(req, res) => {
    const count = await db.incr("count")
    res.send(`count: ${count}`)

})