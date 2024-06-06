const express = require('express');
const router = express.Router();
const { Mammifere } = require('../models');

router.get('/', async(req, res) => {
    const listOfMammifere = Mammifere.findAll({});
    res.json(listOfMammifere);
});

router.post('/', async (req,res) => {
    const mammifere = req.body;
    
    await Mammifere.create(mammifere);
    res.json(mammifere);
});

router.put('/update/:id', async (req,res) => {
    const {race, litreLaitParJour, dateEntreeFerme,idAnimal} = req.body;
    const id = req.params.id;

    await Mammifere.update({
        race: race,
        litreLaitParJour: litreLaitParJour,
        dateEntreeFerme: dateEntreeFerme
    },{
        where: {
            id: id,
        },
        and: {
            idAnimal: idAnimal,
        }
    })
    res.json({race, litreLaitParJour, dateEntreeFerme, idAnimal});
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    await Mammifere.destroy({where:{id: id}});
    res.json("Mammifere deleted successfully");
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const mammifere = await Mammifere.findByPk(id);

    res.json(mammifere);
})

module.exports = router;

