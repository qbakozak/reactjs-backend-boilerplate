const express = require("express")
const app = express()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const session = require("express-session")

const serverPort = require("./server/config/config").serverPort

const port = process.env.PORT || serverPort

const errorHandlingMiddleware = require("./server/middleware/error")

app.use(morgan("dev"))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({ secret: "pszczolkamaja", cookie: { maxAge: 3600000 } }))

app.use(express.static("./server/static/"))
app.use(express.static("./client/dist/"))

const apiRoutes = require("./server/routes/api")
app.use("/api", apiRoutes)

app.use(errorHandlingMiddleware())

app.listen(port, () => {
  console.log("The magic happens on port " + port)
})
