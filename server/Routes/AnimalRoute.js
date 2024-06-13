const express = require('express');
const router = express.Router();
const { Animals } = require('../models');

router.get('/', async (req, res) => {
    const listOfAnimals = Animals.findAll({});
    res.json(listOfAnimals);
});

router.post('/', async (req, res) => {
    const animals = req.body;

    await Animals.create(animals);
    res.json(animals);
});

router.put('/update/:idAnimal', async(req, res)=>{
    const {nom, categorie} = req.body;

    const idAnimal = req.params.idAnimal;
    await Animals.update({
        nom: nom,
        categorie: categorie
    },{
        where: {idAnimal: idAnimal}
    });
    res.json("Animals updated successfylly");
});

router.delete('/delete/:idAnimal', async (req, res) => {
    const idAnimal = req.params.idAnimal;

    await Animals.destroy({where:{idAnimal: idAnimal}});
    res.json("Animals deleted successfully");
});

module.exports = router;