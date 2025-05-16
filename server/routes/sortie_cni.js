const express = require("express");
const router = express.Router();
const getSortieCni = require("../controllers/sortie_cniController");

router.get("/", getSortieCni);

module.exports = router;