// var express = require('express');
// var router = express.Router();

// const User = require('../models/User-BCorporation')

// const isAuthenticated = require('../middleware/isAuthenticated')

// /* GET users listing. */
// router.get('/details/:userId', (req, res, next) => {

//   const { userId } = req.params

//   User.findById(userId)
//     // .populate('bcorporation')
//     .then((foundUser) => {
//       const { _id, email, name , bcorporation, location, image } = foundUser;

//       // Create an object that will be set as the token payload
//       const userInfo = { _id, email, name, bcorporation, location, image };
//       res.json(userInfo)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.json(err)
//       next(err)
//     })

// })

// router.post('/update', isAuthenticated, (req, res, next) => {
//   User.findByIdAndUpdate(
//     req.user._id,
//     req.body,
//     { new: true }
//   )
//   .then((updatedUser) => {
//     res.json(updatedUser)
//   })
//   .catch((err) => {
//     console.log(err)
//     res.json(err)
//     next(err)
//   })
// });

// module.exports = router;

