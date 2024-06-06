const express = require('express');
const router = express.Router();
const { Oiseau } = require('../models');

router.get('/', async (req,res) => {
    const listOfOiseau = await Oiseau.findAll({});

    res.json(listOfOiseau);
});

router.post('/', async (req, res) => {
    const oiseau = req.body;

    await Oiseau.create(oiseau);
    res.json(oiseau);
});

router.put('/update/:id', async (req, res) => {
    const {plumes, nombreOeufsParJour, dateEntreeFerme, idAnimal} = req.body;
    const id = req.params.id;

    await Oiseau.update({
        plumes: plumes,
        nombreOeufsParJour: nombreOeufsParJour,
        dateEntreeFerme: dateEntreeFerme,
    },
    {
        where: {
            id: id,
            idAnimal: idAnimal,
        }
    });
    res.json('Oiseau updated successfully');
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    await Oiseau.destroy({
        where: {id: id}
    });
    res.json('Oiseau deleted !');
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const oiseau = await Oiseau.findByPk(id);

    res.json(oiseau);
});

module.exports = router;