class UserView {
    static createUser(payload) {
        if(payload === null){
            return {error: "payload no existe"};
        } else if(typeof(payload) == "object"){
            if(payload.username == null || payload.name == null || payload.id == null)
            return {error: "necesitan tener un valor válido"};
        }
    }
}

module.exports = UserView;