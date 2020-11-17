const UPC = require ('../models/UPC')
const User = require('../models/user.js');
const Postage = require ('../models/postage.js');

module.exports = {

    async create_comment (req, res){
        return res.status(200)
    },

    async list_all_comments (req, res){
        const upc = await UPC.find();
        return res.json(upc);
    },
}