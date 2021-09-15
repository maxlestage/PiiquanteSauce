const Sauce = require('../models/Sauce');

exports.userLikeOrDislikeSauce = (req, res) => {
    const sauce = Sauce.findById(req.params.id);
    sauce.then((s) => {
        switch (req.body.like) {
            case 1:
                Sauce.updateOne(
                    { _id: s.id },
                    {
                        likes: s.likes + 1,
                        $push: { usersLiked: req.body.userId },
                    }
                ).then(() => res.status(200).json(s));
                console.log("J'aime");
                break;

            case -1:
                // Sauce.updateOne(
                //     { _id: s.id },
                //     {
                //         dislikes: s.dislikes + 1,
                //         $push: { usersDisliked: req.body.userId },
                //     }
                // ).then(() => res.status(200).json(s));
                console.log('On aime plus');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;

            case 0:
                console.log('Neutre');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
        }
    });

    /* 
- récupérer la sauce qui m'intéresse

- si l'utilisateur a liké
  - vérifier s'il est déjà dans la liste des usersLike
    - si non, l'y ajouter et faire +1 à likes
    - si oui, ne rien faire
  - vérifier s'il est déjà dans la liste des usersDislike
    - si oui, l'y retirer et faire -1 à dislikes
    - si non, ne rien faire

- si l'utilisateur a dislike 
  - vérifier s'il est déjà dans la liste des usersDislike
    - si non, l'y ajouter et faire +1 à dislikes
    - si oui, ne rien faire
  - vérifier s'il est déjà dans la liste des usersLike
    - si oui, l'y retirer et faire -1 à likes
    - si non, ne rien faire

- si l'utilisateur a annulé (0)
  - vérifier s'il est déjà dans la liste des usersLike
    - si oui, l'y retirer et faire -1 à likes
  - vérifier s'il est déjà dans la liste des usersDislike
    - si oui, l'y retirer et faire -1 à dislikes

- sauvegarder la sauce

*/
};
