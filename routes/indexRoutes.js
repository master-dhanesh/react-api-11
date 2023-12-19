const express = require("express");
const router = express.Router();

const { test, create, readall } = require("../controllers/indexController");

/**
 * @method GET
 * @access public
 * @api /api/
 * @desc test route
 */
router.get("/", test);

// POST /api/create
router.post("/create", create);

// GET /api/create
router.get("/readall", readall);
module.exports = router;
