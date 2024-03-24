const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.post('/', userService.createCurrentUser);

export default router;