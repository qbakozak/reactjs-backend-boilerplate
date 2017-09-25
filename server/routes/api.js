const express = require("express")
const router = new express.Router()

const config = require("../config/config")

router.get("/test", (req, res) => {
  console.log(`**Accessing /api/test route...`)

  res.status(200)

  res.json({
    status: `Success`,
    message: `You have called /api/test route.`
  })
})

module.exports = router
