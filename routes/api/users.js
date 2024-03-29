const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator/check")

const User = require('../../models/User');

// @router    Post api/users 
// @desc      Register user
// @access    Public
router.post("/", [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body;


    try {


      // See if user exists





      // Get users gravatar



      // Encrypt password




      // Return JWT

      res.send('User route');


    } catch (err) {

      console.error(err.message);

      res.status(500).send("Server error")
    }



  });

module.exports = router;