const functions = require("firebase-functions")

const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require("cors")({
    origin: [
        "https://lineagew-cv.web.app",
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
})
app.use(cors)

app.use("/", require("./routes"))
app.get("/", cors, (req, res) => {
    res.send("Hello World!")
})

app.use((err, req, res, next) => {
    console.log(err, req, res, next)
})

exports.helloWorld = functions
    .region("us-central1").https.onRequest((request, response) => {
        functions.logger.info("Hello logs!", {structuredData: true})
        response.send("Hello from Firebase!")
    })

exports.api = functions
    .region("us-central1").https.onRequest(app)
