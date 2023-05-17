const express = require('express');

const router = express.Router();

const animalsApiRouter = require('./api/animals.route');
const animalsRouter = require('./views/animals.route');
const mainRouter = require('./views/main.route');
const likesRouter = require('./api/like.route');
const authRouter = require('./views/auth.route');
const authApiRouter = require('./api/auth.route');

router.use('/', mainRouter);
router.use('/api/animals', animalsApiRouter);
router.use('/animals', animalsRouter);
router.use('/api/likes', likesRouter);
router.use('/api/auth', authApiRouter);
router.use('/auth', authRouter);

module.exports = router;
