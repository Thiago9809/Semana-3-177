const router = require('express').Router();
const models = require('../../models');
const userController = require('../../Controllers/UserController.js');
const bcrypt = require('bcryptjs');

router.get('/', async(req, res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});

//api/user/register
router.post('/register', async(req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await models.user.create(req.body);
    res.status(200).json(user);

});

//router.post('/', userController.listar);
//router.post('/register', userController.register);
router.post('/signin', userController.signin);

//router.post('/login', userController.login)

module.exports = router;