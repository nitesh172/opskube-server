const express = require("express")

const app = express()

const cors = require("cors")

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors())

const bookController = require("./controllers/book.controller")

app.use("/books", bookController)

module.exports = app
