const express = require("express")
const router = express.Router()

router.get("/hello", (req, res) => {
  res.status(200).send({
    method: "GET",
    route: "http://localhost:3000/api/",
  })
})

router.post("/", (req, res) => {
  res.status(200).send({
    method: "POST",
    route: "http://localhost:3000/api/",
  })
})


module.exports = router