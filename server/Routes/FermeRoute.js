const express = require('express');
const router = express.Router();
const { Ferme } = require('../models');


router.get('/', async (req, res) => {
    const listOfFerme = await Ferme.findAll({});
    res.json(listOfFerme);
});

router.post('/' , async (req, res) => {
    const ferme = req.body;

    await Ferme.create(ferme);
    res.json(ferme);
})

router.put('/update/:numFerme', async (req, res) =>{
    const { nom, adresse} = req.body;
    const numFerme = req.params.numFerme;

    await Ferme.update({numFerme: numFerme,nom: nom, adresse: adresse},
        {where: {numFerme: numFerme}});
    res.json({adresse});
})

router.delete('/delete/:numFerme', async (req, res) => {
    const numFerme = req.params.numFerme;
    await Ferme.destroy({where: {numFerme: numFerme}});
    res.json("ferme deleted");
});

router.get('/byId/:numFerme', async (req, res) => {
    const numFerme = req.params.numFerme;
    const ferme = await Ferme.findByPk(numFerme);
    res.json(ferme);
});

module.exports = router;