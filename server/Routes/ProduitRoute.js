const express = require('express');
const router = express.Router();
const { Produits } = require('../models');
const { literal } = require('sequelize');

router.get('/', async (req, res) => {
    const produits = await Produits.findAll({});

    res.json(produits);
});

//produit par mois

router.get('/groupByWeek', async (req, res) => {
    const productByWeek = Produits.findAll({
        attributes: [
            [literal('EXTRACT'), 'year'],
            [literal('EXTRACT'), 'week']
        ],
        group: ['year', 'week'],
        order: [['year','ASC'], ['week', 'ASC']]
    });
    res.json(productByWeek);
});

//nombre produit pour chaque type
router.get('/byType', async (req, res) => {
    const listsProduits = await Produits.findAll({
    })

    res.json(listsProduits);
})

router.post('/', async (req, res) => {
    const produits = req.body;

    await Produits.create(produits);
    res.json(produits);
});

router.put('/update/:id', async (req, res) => {
    const {nomProduit,typeProduit, description, dateProduction} = req.body;

    const id = req.params.id;
    await Produits.update({
        nomProduit: nomProduit,
        typeProduit: typeProduit,
        description: description,
        dateProduction: dateProduction,
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