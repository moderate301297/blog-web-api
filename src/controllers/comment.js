const Comment = require("../model/comment");
const User = require("../model/user");

function createComment(req, res) {
    console.log('data', req.query)

    User.findOne({ _id: req.query.userId })
        .then((resUser) => {
            if (resUser != null) {
                Comment.findOne({ article_id: req.query.articleId })
                    .then((resComment) => {
                        if (resComment) {
                            const dataComment = {
                                comment_id: Date.now().toString(),
                                user: {
                                    user_id: req.query.userId,
                                    username: resUser.username
                                },
                                content: req.query.content,
                                reply: [],
                                created_at: new Date(Date.now()).toUTCString(),
                                updated_at: new Date(Date.now()).toUTCString()
                            }
                            resComment.comment.push(dataComment)
                            Comment
                                .updateOne({ article_id: req.query.articleId }, { comment: resComment.comment })
                                .then(() => res.status(201).json({ message: "Update db successfully" }))
                                .catch((err) => res.status(400).json({ message: err }));

                        } else {
                            const comment = new Comment({
                                article_id: req.query.articleId,
                                comment: [{
                                    comment_id: Date.now().toString(),
                                    user: {
                                        user_id: req.query.userId,
                                        username: resUser.username
                                    },
                                    content: req.query.content,
                                    reply: [],
                                    created_at: new Date(Date.now()).toUTCString(),
                                    updated_at: new Date(Date.now()).toUTCString()
                                }],
                            });
                            comment
                                .save()
                                .then(() => res.status(201).json({ message: "Save db successfully" }))
                                .catch((err) => res.status(400).json({ message: err }));
                        }
                    })
                    .catch((err) => res.status(400).json({ message: err }));
            } else {
                res.json({ message: 'please login' })
            }
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function updateComment(req, res) {
    console.log('update', req.body)
    const comment = new Comment({
        ...req.body,
        updatedAt: Date.now().toUTCString()
    });
    comment
        .save()
        .then(() => res.status(201).json({ message: "Update db successfully" }))
        .catch((err) => res.status(400).json({ message: err }));
};

function getListComment(req, res) {
    console.log('getListComment', req.query)
    Comment.find()
        .then((response) => {
            res.json({ data: response })
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function getArticleComment(req, res) {
    console.log('getArticleComment', req.query.articleId)
    Comment.findOne({ article_id: req.query.articleId })
        .then((response) => {
            if (response) {
                let count = 0
                response.comment.forEach((item, index) => {
                    item.reply.forEach((e, i) => {
                        count++
                    })
                })
                res.json({ data: response, total: response.comment.length + count })
            } else {
                res.json({ data: response, total: 0 })
            }
        })
        .catch((err) => res.status(400).json({ message: err }));
};

function deleteComment(req, res) {
    Comment.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Delete db successfully" }))
        .catch(() => res.status(400).json({ message: err }));
};

module.exports = {
    createComment,
    updateComment,
    getListComment,
    getArticleComment,
    deleteComment
}
