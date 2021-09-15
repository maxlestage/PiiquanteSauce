const express = require('express');
const router = express.Router();

// Middleware qui gère des autorisations sur notre app.
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Import du controller pour faire le lien avec l'appel de route.
const sauceCtrl = require('../controllers/sauce');
const userCtrl = require('../controllers/like');

// /api/sauces/routeActionController.
router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, userCtrl.userLikeOrDislikeSauce);

// Permet d'utiliser sauce.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
