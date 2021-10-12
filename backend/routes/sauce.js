const express = require("express");
const router = express.Router();

// Middleware qui gère des autorisations sur notre app.
const multer = require("../middleware/multer-config");

// Import du controller pour faire le lien avec l'appel de route.
const sauceCtrl = require("../controllers/sauce");
const likeCtrl = require("../controllers/like");
//* const modifySauceCtrl = require("../controllers/modifySauce");

// /api/sauces/routeActionController.
router.get("/", sauceCtrl.getAllSauce);
router.post("/", multer, sauceCtrl.createSauce);
router.get("/:id", sauceCtrl.getOneSauce);
router.put("/:id", multer, sauceCtrl.modifySauce);
router.delete("/:id", sauceCtrl.deleteSauce);
router.post("/:id/like", likeCtrl.userLikeOrDislikeSauce);

// Permet d'utiliser sauce.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
