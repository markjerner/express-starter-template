const express = require('express')
const router = express.Router()

// @desc    GET - Renders view for index page (/)
// @route    /GET
// @access  PUBLIC
router.get('/', function(req, res, next) {
  res.send('Simple Express Application')
})

module.exports = router
