const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const cardRoute = require("./router/api")

dotenv.config()                  

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('BACKEND IS RUNNING')
  })

app.use("/api", cardRoute)

const PORT = process.env.PORT || 8801

app.listen(PORT, () => {
    console.log("Backend server is running!")
}) 


