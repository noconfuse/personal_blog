/**
 * Created by bulusi on 2017/8/20.
 */


var router = require('express').Router();

router.get('/',function(req,res,next){
    res.render('main/index',{
        user:req.session.user
    })
})

module.exports = router;