const express = require("express")
const router = new express.Router()

router.get("/config", require("./config/get"))
router.post("/config", require("./config/set"))
router.get("/config/maps", require("./config/maps"))
router.get("/test-cors", require("./config/test-cors"))

router.get("/profile", require("./profile/get"))
router.post("/profile", require("./profile/set"))

module.exports = router
