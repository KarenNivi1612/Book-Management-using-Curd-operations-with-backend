const express = require("express");
const router = express.Router();
const View = require("../Controllers/View");
const Add = require("../Controllers/Add");
const Update = require("../Controllers/Update");
const Delete = require("../Controllers/Delete");

router.get("/", View);
router.post("/", Add);
router.put("/:id", Update);
router.delete("/:id", Delete);

module.exports = router;
