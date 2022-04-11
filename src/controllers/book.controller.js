const { Router } = require("express")
const router = Router()
const db = require("../configs/db.json")

router.get("", (req, res) => {
  res.status(200).json(db)
})

module.exports = router
