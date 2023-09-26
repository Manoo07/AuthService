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
}

module.exports = UserRepository;