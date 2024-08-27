const express = require("express");
const {AddData, GetData, DeleteData} = require("../controllers/contactController");

const router = express.Router();

router.get("/", GetData);
router.post("/", AddData);
router.delete("/:id", DeleteData);

module.exports=router