const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, minLength: 5 }, // Doit contenir minimum 5 caractères.
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true, default: 0 }, // Par défaut les likes sont à 0.
  dislikes: { type: Number, required: true, default: 0 }, // Par défaut les dislikes sont à 0.
  usersLiked: { type: [String] }, // On va venir stocker l'id des gens qui ont aimé la sauce
  usersDisliked: { type: [String] }, // On va venir stocker l'id des gens qui ont pas aimé la sauce
});

module.exports = mongoose.model("Sauce", sauceSchema);

/*
● userId : String — l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
● name : String — nom de la sauce
● manufacturer : String — fabricant de la sauce
● description : String — description de la sauce
● mainPepper : String — le principal ingrédient épicé de la sauce
● imageUrl : String — l'URL de l'image de la sauce téléchargée par l'utilisateur
● heat : Number — nombre entre 1 et 10 décrivant la sauce
● likes : Number — nombre d'utilisateurs qui aiment (= likent) la sauce
● dislikes : Number — nombre d'utilisateurs qui n'aiment pas (= dislike) la
sauce
● usersLiked : [ "String <userId>" ] — tableau des identifiants des utilisateurs
qui ont aimé (= liked) la sauce
● usersDisliked : [ "String <userId>" ] — tableau des identifiants des
utilisateurs qui n'ont pas aimé (= disliked) la sauce
 */
