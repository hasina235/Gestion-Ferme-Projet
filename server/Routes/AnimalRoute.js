const express = require('express');
const router = express.Router();
const { Animals } = require('../models');

router.get('/', async (req, res) => {
    const animals =await Animals.findAll({});
    res.json(animals);
});

router.post('/', async (req, res) => {
    const animals = req.body;

    await Animals.create(animals);
    res.json(animals);
});

router.put('/update/:id', async(req, res)=>{
    const {nom, categorie} = req.body;

    const id = req.params.id;
    await Animals.update({
        nom: nom,
        categorie: categorie
    },{
        where: {id: id}
    });
    res.json("Animals updated successfylly");
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    await Animals.destroy({where:{id: id}});
    res.json("Animals deleted successfully");
});

module.exports = router;