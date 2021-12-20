const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const AdsController = require('./controllers/AdsController');
const UserControler = require('./controllers/UserControler');

const Auth = require('./middlewares/Auth');
const AuthValidator = require('./validators/AuthValidator');
const UserValidator = require('./validators/UserValidator');

router.post('/user/singin', AuthValidator.singIn, AuthController.singIn);
router.post('/user/singup', AuthValidator.singUp, AuthController.singUp);

router.get('/states', UserControler.getStates);

router.get('/user/me', Auth.private, UserControler.info);
router.put('/user/me', UserValidator.editAction, Auth.private, UserControler.editAction);

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', Auth.private, AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', Auth.private, AdsController.editAction);

module.exports = router;
