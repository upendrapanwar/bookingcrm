const config = require('../config/index');
const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
const { array } = require('joi');
const { registerValidation } = require('../validations/user.validation');
const msg = require('../helpers/messages.json');

const multer = require('multer');

// router.post('/signup', registerValidation, register);
// router.post('/forgot-password', forgotPassword);
// router.put('/update-profile-details/:id', updateProfileDetails);
// router.put('/update-ambassador-profile-details/:id', updateAmbassadorProfileDetails);
// router.get('/get-profile-details/:id', getProfileDetails);
// router.get('/check-southafrican-id/:id', checkSouthAfricanId);
// router.get('/check-email-id/:id', checkEmailId);


module.exports = router;

/**
 * Function registers the user
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @return JSON|null
 */
function register(req, res, next) {
    userService.create(req.body)
    .then(user => user ? res.status(201).json({ status: true, message: msg.user.signup.success, data: user }) : res.status(400).json({ status: false, message: msg.user.signup.error }))
    .catch(err => next(res.status(400).json({ status: false, message: err })));
}