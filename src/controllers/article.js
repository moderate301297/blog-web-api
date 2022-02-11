const Article = require("../model/article");


function createArticle(req, res) {
    console.log('data', req.body)
    const article = new Article({
        ...req.body,
        created_at: new Date(Date.now()).toUTCString(),
        updated_at: new Date(Date.now()).toUTCString()
    });
    article
        .save()
        .then(() => res.status(201).json({ message: "Save db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateArticle(req, res) {
    console.log('update', req.body)
    const article = new Article({
        ...req.body,
        updatedAt: new Date(Date.now()).toUTCString()
    });
    article
        .save()
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateCountView(req, res) {
    const countView = parseInt(req.query.countView) + 1
    console.log('updateCountView', countView)
    Article
        .updateOne({ _id: req.params.id }, { viewCount: countView })
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function updateLikeCount(req, res) {
    console.log('updateLikeCount', req.query)
    Article
        .updateOne({ _id: req.query.articleId }, { likeCount: req.query.likeCount })
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function getListArticle(req, res) {
    console.log('data', req.query)
    Article
        .find()
        .limit(req.query.limit)
        .then((response) => {
            console.log('res', response)
            res.json({
                data:
                {
                    data: response, total: response.length
                }
            })
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function getArticleById(req, res) {
    console.log('getArticleById', req.params)
    Article
        .findOne({ _id: req.params.id })
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

function getInterArticle(req, res) {
    console.log('getInterArticle', req.query)
    Article
        .findOne({ _id: req.query.articleId })
        .then((response) => {
            Article
                .find({tagList: { $in: response.tagList }})
                .limit(req.query.limit)
                .then((response) => {
                    res.json({
                        data:
                        {
                            data: response
                        }
                    })
                })
                .catch((err) => res.status(400).json({ message: err }));
        })
        .catch((err) => res.status(400).json({ message: err }));
};

module.exports = {
    createArticle,
    updateArticle,
    updateCountView,
    updateLikeCount,
    getArticleById,
    getListArticle,
    getInterArticle
}
