const Like = require("../model/like");


function addLike(req, res) {
    console.log('addLike', req.query)
    const like = new Like({
        user_id: JSON.parse(req.query.access_token)._id,
        article_id: req.query.articleId,
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    like
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function cancelLike(req, res) {
    console.log('update', req.query)
    Like
        .deleteOne({ user_id: req.query.userId, Like_id: req.query.articleId})
        .then(() => res.status(201).json({ message: "Delete db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function checkLike(req, res) {
    console.log('checkLike', req.query)
    Like
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
    addLike,
    checkLike,
    cancelLike
}
