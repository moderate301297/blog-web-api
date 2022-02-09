const User = require("../model/user");

function createUser(req, res) {
    console.log('data', req.body)
    const user = new User({
        ...req.body,
        active: true,
        status: 'off-line',
        access_token: new Date(Date.now()).toString(),
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    console.log('user', user)
    user
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateUser(req, res) {
    console.log('update', req.body)
    const user = new User({
        ...req.body,
        updatedAt: Date.now().toUTCString()
    });
    user
        .save()
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateStatus(req, res) {
    console.log('updateS', req.query)
    User.findOne({ username: req.query.username, password: req.query.password })
        .then((response) => {
            if (response != null) {
                User
                    .updateOne({ _id: response._id }, { status: req.query.status })
                    .then(() => res.json({ data: response }))
                    .catch((err) => res.json({ message: err }));
            } else {
                res.json({ message: 'invalid username or password' })
            }
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function updatePassword(req, res) {
    console.log('updateP', req.body)
    const user = new User({
        password: hash,
        updatedAt: Date.now().toUTCString()
    });
    user
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function getUserInfo(req, res) {
    console.log('getUserInfo', req.query.token)
    User.findOne({ access_token: req.query.token })
        .then((response) => {
            res.json({ data: response })
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function deleteUser(req, res) {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé !!!" }))
        .catch(() => res.status(400).json({ message: "Utilisateur non trouvé !" }));
};

module.exports = {
    createUser,
    updateUser,
    updateStatus,
    updatePassword,
    getUserInfo,
    deleteUser
}
