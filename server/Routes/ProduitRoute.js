const express = require('express');
const router = express.Router();
const { Produits } = require('../models');

router.get('/', async (req, res) => {
    const produits = await Produits.findAll({});

    res.json(produits);
});

router.post('/', async (req, res) => {
    const produits = req.body;

    await Produits.create(produits);
    res.json(produits);
});

router.put('/update/:id', async (req, res) => {
    const {nomProduit, description, prix, sourceId} = req.body;

    const id = req.params.id;
    await Produits.update({
        nomProduit: nomProduit,
        description: description,
        prix: prix,
    },
    {
        where: {
            id: id,
        }
    });
    res.json('Product updated successfully');
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    
    await Produits.destroy({where:{id: id}});
    res.json('Product deleted successfully');
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;

    const produit = await Produits.findByPk(id);
    res.json(produit);
});

module.exports = router;