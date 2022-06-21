const express = require('express')
const router = express.Router()
router.get('/', (req,res)=>{
    res.render('forums.ejs')
})

module.exports = router;