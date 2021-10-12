const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");
const path = require("path");

// Middleware qui gère des autorisations sur notre app.
const auth = require("../middleware/auth");

//? CORS signifie « Cross Origin Resource Sharing »
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Connexion avec la base de données:
mongoose
  .connect(
    "mongodb+srv://Piiquante_00:ONhp9pmsZv7RcpVQ@cluster0.elxn6.mongodb.net/PiiquanteSauce?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log({ err }));

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", auth, sauceRoutes); // Ajout de auth afin de ne pas l'écrire 10 fois dans la route sauce

module.exports = app;
