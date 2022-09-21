const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

// login
router.post('/login', user.login);
// all users
router.get('/', auth, user.all);
//register 2
router.post('/register', user.create)
module.exports = router;