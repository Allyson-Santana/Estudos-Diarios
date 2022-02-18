const express = require('express')
const multer = require('multer')
const app = express()

const upload = multer({ dest: './uploads' })

app.post('/upload', upload.single('avatar'), function (req, res, next) {
    console.log(req.file)
    // req.file is the `avatar` file
    console.log(req.body)
    // req.body will hold the text fields, if there were any
  })

app.listen(3333, function() {
    console.log("Rodando....")
})