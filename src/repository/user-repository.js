const { User } = require('../models/index');


class UserRepository {
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Some thing went wrong : ",error);
            throw {error};
        }
    }
    async destroy(UserId){
        try {
             await User.destroy({
                where:{
                    id:UserId
                }
            });
            return true;
        } catch (error) {
            console.log("Some thing went wrong : ",error);
            throw {error};
        }
    }

    async getById(UserId){
        try {
            // since we dont want user password in response so we do it by this method 
            const user = await User.findByPk(UserId,{
                attributes:['Email','id']
            });
            return user;
        } catch (error) {
            console.log("Some thing went wrong : ",error);
            throw {error};
        }
    }
    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where:{
                    Email:userEmail,
                }
            })
            return user;
        } catch (error) {
            console.log("Some thing went wrong : ",error);
            throw {error};
        }
    }
}

module.exports = UserRepository;