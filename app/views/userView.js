const User = require("../models/user");

class UserView {
    static createUser(payload) {
        if(payload === null){
            return {error: "payload no existe"};
        } else if(typeof(payload) == "object"){
            if(payload.username == null || payload.name == null || payload.id == null)
                return {error: "necesitan tener un valor válido"};
            if(payload.username == undefined || payload.name == undefined || payload.id == undefined)
                return {error: "necesitan tener un valor válido"};
            return new User(payload.id, payload.username, payload.name, "Sin bio");
        }
    }
}

module.exports = UserView;