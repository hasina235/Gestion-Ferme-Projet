const express = require('express');
const router = express.Router();
const { Produits } = require('../models');
const { literal } = require('sequelize');

// router.get('/', async (req, res) => {
//     const produits = await Produits.findAll({});

//     res.json(produits);
// });

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

//les produits par pagination
router.get('/', async (req, res) => {
    // Parse page and limit from query parameters, default to 1 and 5 respectively
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const offset = (page - 1) * limit;

    try {
        // Fetch data and total count from the database
        const { count, rows } = await Produits.findAndCountAll({
            limit,
            offset,
        });

        // Send JSON response with pagination details and data
        res.json({
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            produits: rows,
        });
    } catch (error) {
        // Handle errors and send a 500 status code with an error message
        console.error('Error fetching products:', error); // Improved error logging
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des produits' });
    }
});


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