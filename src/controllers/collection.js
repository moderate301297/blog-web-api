const Collection = require("../model/collection");


function addCollection(req, res) {
    console.log('addCollection', req.query)
    const collection = new Collection({
        user_id: JSON.parse(req.query.access_token)._id,
        article_id: req.query.articleId,
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    collection
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function cancelCollection(req, res) {
    console.log('Delete', req.query)
    Collection
        .deleteOne({ user_id: req.query.userId, collection_id: req.query.articleId})
        .then(() => res.status(201).json({ message: "Delete db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function checkCollection(req, res) {
    console.log('checkCollection', req.query)
    Collection
        .findOne({ _id: req.query.articleId, user_id:  req.query.userId})
        .then((response) => {
            console.log('res', response)
            res.json({
                data:
                {
                    data: response
                }
            })
        })
        .catch((err) => res.status(400).json({ message: err }));
};

module.exports = {
    addCollection,
    checkCollection,
    cancelCollection
}
