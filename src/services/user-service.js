const jwt = require('jsonwebtoken');
const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
const {JWT_KEY} = require('../config/serverConfig');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }
    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Error in service layer : ",error);
            throw {error};
        }
    }
    async signIn(email,plainPassword){
        try {
            // fetch user by email 
            const user = await this.userRepository.getByEmail(email);
            // compare passwords 
            const passwordMatch =  this.checkPassword(plainPassword,user.Password);
            if(!passwordMatch){
                console.log("Password does not match ");
                throw {error:"Incorrect password "};
            }
            // password match create a JWT and send to user
            const newJWt = this.createToken({Email: user.Email,Password: user.Password});
            return newJWt;
            
        } catch (error) {
            console.log("Error in signIn : ",error);
            throw {error};
        }
    }
    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        } catch (error) {
            console.log("Error in token creation : ",error);
            throw {error};
        }
    }
    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Error in token creation : ",error);
            throw {error};
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("Error in Password check : ",error);
            throw {error};
        }
    }
}
module.exports = UserService;