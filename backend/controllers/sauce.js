const Sauce = require("../models/Sauce");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Création d'une sauce.
exports.createSauce = (req, res) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//  Modification de la sauce.
exports.modifySauce = (req, res) => {
  let sauceObject;
  if (req.file) {
    sauceObject = {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    };
  } else {
    sauceObject = { ...req.body };
  }
  // On peut mettre à jour une sauce si les éléments de la réponse locals.userId sont strictement identique à la valeur de la requete sur l'userId également.
  Sauce.updateOne(
    { _id: req.params.id, userId: sauceObject.userId },
    { ...sauceObject }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
  console.log("ça passe");
};

// Suppression de la sauce.
exports.deleteSauce = (req, res) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      const token = req.headers.authorization.split(" ")[1],
        decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"),
        userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        const filename = sauce.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Objet supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// Afficher le détail d'une sauce.
exports.getOneSauce = (req, res) => {
  Sauce.findOne({ _id: req.params.id }).then((sauce) =>
    res.status(200).json(sauce)
  );
};

// Afficher toutes les sauces.
exports.getAllSauce = (req, res) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

let data = "data";
