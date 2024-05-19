const express = require('express');
const serviceController = require('../controllers/serviceController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/request', authenticate, serviceController.requestService);

module.exports = router;
