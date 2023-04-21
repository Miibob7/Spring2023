import express from 'express'
import bodyParser from 'body-parser'
import redis from 'redis'
const app = express()
  var urlencodedparcer = bodyParser.urlencoded({extend: false})
const db = redis.createClient({
    url: 'redis://localhost:6379'
}); 

await db.connect()

app.get('/save/:number', async (req, res) => {
    await db.set("thenumber", req.params.number)
    res.send ("OK")
    })

    app.get('/showme', async (req, res) => {
        const number = await db.get("thenumber")
    res. send(`<!DOCTYPE html><html><body>${number}</body></html>`)
    })

app.use(express.static('week07/public'))
 app.get('/', async(req, res) => {
    })
app.listen(80,() =>{
    console.log(`example app is listening on port 80`)
})

app.post('/data-entry', urlencoderPareser, async (req, res)=>{
    res.send(req.body)
})
app.post('/data-entry', urlencoderPareser, async (req, res)=>{
    await db.set("form-data", req.body.mytext) 
    res.send(`<!DOCTYPE html><html><body>Data saved to Redis key named 'form-data'</body></html>`)
})
app.get ('/wheres-my-data', async (req, res)=>{
    const theData = await db.get("form-data")
    res.send(`<!DOCTYPE html><html><body>Data loaded from Redis is:<P> ${theData}</body></html>`)
})