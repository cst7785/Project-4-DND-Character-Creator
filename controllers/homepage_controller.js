const express = require('express')
const router = express.Router()
router.get('/', (req,res)=>{
    res.render('index.ejs')
})
module.exports = router;
router.get('/new', (req,res)=>{
    res.render('new.ejs')
})

router.post('/', (req,res)=>{
    res.send(req.body)
})