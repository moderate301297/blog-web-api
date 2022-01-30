const User = require("../model/user");
const bcrypt = require("bcrypt");

function createUser(req, res) {
    console.log('data', req.body)
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            ...req.body,
            password: hash,
        });
        user
            .save()
            .then(() => res.status(201).json({ message: "Save db successfully" }))
            .catch((err) => res.status(400).json({ message: err }));
    });
};

function deleteUser(req, res) {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé !!!" }))
        .catch(() => res.status(400).json({ message: "Utilisateur non trouvé !" }));
};

module.exports = {
    createUser,
    deleteUser
}
