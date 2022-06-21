const express = require('express')
const router = express.Router()
const db = require('../models')
router.get('/', async (req, res, next)=>{
    try {
        const characters = await db.Character.find({}).populate('stats');
        context = {characters}
        res.render('index.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
router.get('/characters/:id', async (req, res, next)=>{
    try {
        const character = await db.Character.findById(req.params.id).populate('stats');
        context = {character}
        res.render('show.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
router.get('/edit/:id', async (req, res, next)=>{
    try {
        const character = await db.Character.findById(req.params.id).populate('stats');
        context = {character}
        res.render('edit.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
router.put('/characters/:id', async (req, res, next) => {
    try {
        let updatedCharacterInformation = await db.Character.findByIdAndUpdate(req.params.id, req.body);
        let updatedStats = {
            character: req.params.id,
            strength: req.body.strength,
            dexterity: req.body.dexterity,
            constitution: req.body.constitution,
            intelligence: req.body.intelligence,
            wisdom: req.body.wisdom,
            charisma: req.body.charisma};
        updatedStats = await db.Stats.findByIdAndUpdate(updatedCharacterInformation.stats, updatedStats)
        res.redirect(`/characters/${updatedCharacterInformation._id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
router.get('/new', (req,res)=>{
    res.render('new.ejs')
})


router.post('/', async (req, res, next) => {
    try {
        let characterInformation = await db.Character.create(req.body);
        let stats = {
            character: characterInformation._id,
            strength: req.body.strength,
            dexterity: req.body.dexterity,
            constitution: req.body.constitution,
            intelligence: req.body.intelligence,
            wisdom: req.body.wisdom,
            charisma: req.body.charisma};
        stats = await db.Stats.create(stats);
        characterInformation = await db.Character.findByIdAndUpdate(characterInformation._id, {stats: stats})
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
router.delete('/characters/:id', async (req,res, next)=>{
    try {
        const deletedCharacter = await db.Character.findByIdAndDelete(req.params.id);
        const deletedStats = await db.Stats.findByIdAndDelete(deletedCharacter.stats)
        return res.redirect('/')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router;