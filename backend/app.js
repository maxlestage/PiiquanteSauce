const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sauce = require('./models/Sauce');
const userRoutes = require('./routes/user');

//? CORS signifie « Cross Origin Resource Sharing »
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
});

mongoose
    .connect(
        'mongodb+srv://Piiquante_00:ONhp9pmsZv7RcpVQ@cluster0.elxn6.mongodb.net/PiiquanteSauce?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

// app.use('/api/sauces', (req, res, next) => {
//     const sauce = [
//         {
//             _id: 'ekfjenvihhnz',
//             name: 'Sakari',
//             manufacturer: 'Le petit basque',
//             description: 'Sauce aux piments',
//             mainPepper: 'Doux',
//             imageUrl:
//                 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             heat: 1,
//             likes: 12,
//             dislikes: 18,
//         },
//         {
//             _id: 'oeihfzeoi',
//             name: 'ICHLASAUCEKIPIK',
//             manufacturer: 'SAUCEKIPIK',
//             description: 'Sauce qui pique très fort !',
//             mainPepper: 'Moyen',
//             imageUrl:
//                 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             heat: 5,
//             likes: 10,
//             dislikes: 3,
//         },
//         {
//             _id: 'dzecezdzef',
//             name: 'ArzhumSauce',
//             manufacturer: 'Salamalek',
//             description: 'Sauce secrete maison',
//             mainPepper: 'Hot',
//             imageUrl:
//                 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//             heat: 10,
//             likes: 100,
//             dislikes: 3,
//         },
//     ];
//     res.status(200).json(sauce);
// });

/* //? Capture et enregistre l'image, analyse la sauce transformée en chaîne de caractères et l'enregistre dans la base de données en définissant correctement son imageUrl. Initialise les likes et dislikes de la sauce à 0 et les usersLiked et usersDisliked avec des tableaux vides. Remarquez que le corps de la demande initiale est vide ; lorsque multer est ajouté, il renvoie une chaîne pour le corps de la demande en fonction des données soumises avec le fichier.
app.post('/api/sauces', (req, res, next) => {
    delete req.body._id;
    const sauce = new Sauce({
        ...req.body,
    });
    sauce
        .save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch((error) => res.status(400).json({ error }));
});

//? Renvoie un tableau de toutes les sauces de la base de données.
app.get('/api/sauces', (req, res, next) => {
    Sauce.find()
        .then((Sauces) => res.status(200).json(Sauces))
        .catch((error) => res.status(400).json({ error }));
});

//? Renvoie la sauce avec l’_id fourni.
app.get('/api/sauces/:id', (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => res.status(200).json(sauce))
        .catch((error) => res.status(404).json({ error }));
});

//? Met à jour la sauce avec l'_id fourni. Si une image est téléchargée, elle est capturée et l’imageUrl de la sauce est mise à jour. Si aucun fichier n'est fourni, les informations sur la sauce se trouvent directement dans le corps de la requête (req.body.name, req.body.heat, etc.). Si un fichier est fourni, la sauce transformée en chaîne de caractères se trouve dans req.body.sauce. Notez que le corps de la demande initiale est vide ; lorsque multer est ajouté, il renvoie une chaîne du corps de la demande basée sur les données soumises avec le fichier.
app.put('/api/sauces/:id', (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch((error) => res.status(400).json({ error }));
});

//? Supprime la sauce avec l'_id fourni.
app.delete('/api/sauces/:id', (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch((error) => res.status(400).json({ error }));
});

//? Définit le statut « Like » pour l' userId fourni. Si like = 1, l'utilisateur aime (= like) la sauce. Si like = 0, l'utilisateur annule son like ou son dislike. Si like = -1, l'utilisateur n'aime pas (= dislike) la sauce. L'ID de l'utilisateur doit être ajouté ou retiré du tableau approprié. Cela permet de garder une trace de leurs préférences et les empêche de liker ou de ne pas disliker la même sauce plusieurs fois : un utilisateur ne peut avoir qu'une seule valeur pour chaque sauce. Le nombre total de « Like » et de « Dislike » est mis à jour à chaque nouvelle notation.
app.post('/api/sauces/:id/like', (req, res, next) => {}); */

app.use('/api/auth', userRoutes);

module.exports = app;
