// var express = require('express');
// var router = express.Router();

// const User = require('../models/User-Investor')

// /* GET users listing. */
// router.get('/details/:userId', (req, res, next) => {

//   const { userId } = req.params

//   User.findById(userId)
//     // .populate('investor')
//     .then((foundUser) => {
//       const { _id, email, name , investor, location, image } = foundUser;

//       // Create an object that will be set as the token payload
//       const userInfo = { _id, email, name, investor, location, image };
//       res.json(userInfo)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.json(err)
//       next(err)
//     })

// })

// module.exports = router;
