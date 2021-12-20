const Category = require('../models/Category');
require('dotenv').config();

module.exports = {
    getCategories: async (req, res) => {
        const categoriesBase = await Category.find();
        let categories = [];
        for(let i in categoriesBase) {
            categories.push({
                ...categoriesBase[i]._doc,
                img: `${process.env.BASE}/assets/images/${categoriesBase[i].slug}.png`
            });
        }
        res.json(categories);
    },

    addAction: async (req, res) => {

    },

    getList: async (req, res) => {

    },

    getitem: async (req, res) => {

    },

    editAction: async (req, res) => {

    }
}