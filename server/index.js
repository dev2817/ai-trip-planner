import express from 'express'
import cors from 'cors'
import "dotenv/config"
import router from './routes/index.routes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listening to ${port}`);
})