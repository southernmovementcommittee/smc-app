const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController')

router.post('/send-qr-code', emailController.sendEmailWithQRCode)

module.exports = router;