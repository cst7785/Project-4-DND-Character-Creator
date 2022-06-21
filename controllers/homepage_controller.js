const express = require('express')
const router = express.Router()
const db = require('../models')
router.get('/', (req,res)=>{
    res.render('index.ejs')
})
module.exports = router;
router.get('/new', (req,res)=>{
    res.render('new.ejs')
})

// router.post('/', (req,res)=>{
//     res.send(req.body)
// })

router.post('/', async (req, res, next) => {
    try {
        let characterInformation = await db.Character.create(req.body);
        console.log(characterInformation)
        let stats = {
            character: characterInformation._id,
            strength: req.body.strength,
            dexterity: req.body.dexterity,
            constitution: req.body.constitution,
            intelligence: req.body.intelligence,
            wisdom: req.body.wisdom,
            charisma: req.body.charisma};
        console.log(stats)
        stats = await db.Stats.create(stats);
        // const updatedProduct = await db.Product.findByIdAndUpdate(req.params.id, req.body);

        characterInformation = await db.Character.findByIdAndUpdate(characterInformation._id, {stats: stats})
        // console.log(req.body)
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})