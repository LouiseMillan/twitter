const User = require("../models/user");

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }
    static getInfo(user){
        return [
            user.id,
            user.username,
            user.name,
            user.bio
        ];
    }
    static updateUserUsername(user, username){
        user.setUsername = username;
    }
    static getAllUsernames(users){
        if(Array.isArray(users)){
            return users.map(element => {
                return element.username;
            });
        }
        return null;
    }
}

module.exports = UserService;