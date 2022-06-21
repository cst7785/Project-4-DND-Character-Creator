const express = require('express')
const router = express.Router()
router.get('/', (req,res)=>{
    res.render('manual.ejs')
})
module.exports = router;