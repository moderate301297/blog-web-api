const Recommend = require("../model/recommend");

function createRecommend(req, res) {
    console.log('data', req.body)
    const recommend = new Recommend({
        ...req.body,
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    recommend
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateRecommend(req, res) {
    console.log('update', req.body)
    const recommend = new Recommend({
        ...req.body,
        updatedAt: Date.now().toUTCString()
    });
    recommend
        .save()
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function getListRecommend(req, res) {
    console.log('getListRecommend')
    Recommend.find()
        .then((response) => {
            res.json({ data: response })
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function deleteRecommend(req, res) {
    Recommend.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Delete db successfully" }))
        .catch(() => res.status(400).json({ message: err }));
};

module.exports = {
    createRecommend,
    updateRecommend,
    getListRecommend,
    deleteRecommend
}
