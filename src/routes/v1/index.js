const express = require('express');
const UserController = require('../../controllers/user-controllers');
const {AuthRequestvalidatorsMiddleware} = require('../../middlewares/index');
const router = express.Router();

router.post('/signup'
    ,AuthRequestvalidatorsMiddleware.validateUserAuth,  
        UserController.create);
router.post('/signIn',
    AuthRequestvalidatorsMiddleware.validateUserAuth,
        UserController.signIn);
router.get(
    '/isAuthenticated',UserController.isAuthenticated
);
router.get('/dummy',(req,res)=>{
    return res.status(200).json({
        message:'ok'
    })
})
module.exports = router;