const express = require("express");
const router = express.Router();

// Import du controller user pour gérer les actions.
const userCtrl = require("../controllers/user");

// /api/auth/routeActionController.
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

// Permet d'utiliser user.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
