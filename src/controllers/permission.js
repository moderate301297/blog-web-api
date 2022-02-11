const Permission = require("../model/permission");

function createPermission(req, res) {
    console.log('data', req.body)
    const permission = new Permission({
        ...req.body,
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    permission
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updatePermission(req, res) {
    console.log('update', req.body)
    const permission = new Permission({
        ...req.body,
        updatedAt: Date.now().toUTCString()
    });
    permission
        .save()
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function deletePermission(req, res) {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé !!!" }))
        .catch(() => res.status(400).json({ message: "Utilisateur non trouvé !" }));
};

module.exports = {
    createPermission,
    updatePermission,
    deletePermission
}
