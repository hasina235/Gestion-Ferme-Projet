const express = require('express');
const router = express.Router();
const { Stocks } = require('../models');

router.get('/', async (req, res) => {
    const stocks = await Stocks.findAll({});

    res.json(stocks);
});

router.post('/', async (req, res) => {
    const stocks = req.body;

    await Stocks.create(stocks);
    res.json(stocks);
});

router.put('/update/:numStock', async (req, res) => {
    const numStock = req.params.numStock;

    const {quantiteEnStock, dateEntreeEnStock, produitId } = req.body;

    await Stocks.update({
        quantiteEnStock: quantiteEnStock,
        dateEntreeEnStock: dateEntreeEnStock,
    },{
        where: {
            numStock: numStock,
            produitId: produitId,
        }
    });
     res.json("Stock updated successfully");
});

router.delete('/delete/:numStock', async (req, res) => {
    const numStock = req.params.numStock;

    await Stocks.destroy(numStock);
    res.json('stock deleted');
});

router.get('/parStock/:numStock', async (req, res) => {
    const numStock = req.params.numStock;

    const stock = await Stocks.findByPk(numStock);
    res.json(stock);
});

module.exports = router;