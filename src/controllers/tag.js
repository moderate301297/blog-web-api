const Tag = require("../model/tag");

function createTag(req, res) {
    console.log('data', req.body)
    const tag = new Tag({
        ...req.body,
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    tag
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateTag(req, res) {
    console.log('update', req.body)
    const tag = new Tag({
        ...req.body,
        updatedAt: Date.now().toUTCString()
    });
    tag
        .save()
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function getListTag(req, res) {
    console.log('getListTag')
    Tag.find()
        .then((response) => {
            res.json({ data: response })
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function deleteTag(req, res) {
    Tag.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé !!!" }))
        .catch(() => res.status(400).json({ message: "Utilisateur non trouvé !" }));
};

module.exports = {
    createTag,
    updateTag,
    getListTag,
    deleteTag
}
