const bcrypt = require("bcrypt");
const Article = require("../model/article");

function getArticle(req, res) {
    console.log('data', req.query)
    Article
        .find()
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

module.exports = {
    getArticle
}
