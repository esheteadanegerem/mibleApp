
const jwt=require('jsonwebtoken')
const UserModel=require('../models/users')
const register=async(req,res)=>{
const {name,email,password}=req.body
         console.log(req.body); 
await UserModel.findOne({email: email})

    .then((user) => {
        if (user) {
            res.json('user already exists');
        } else {
        
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password, 
            };
            UserModel.create(newUser);
        }
    })
    .catch(error => {
        console.log('error', error);
        res.json('server error');
    });



}
const login=(req,res)=>{

}
module.exports={register,login}