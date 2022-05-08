const UserView = require("../../app/views/userView");

describe("Test for UserView", () => {
    // Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y 
    // el valor indique `payload no existe`.
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload no existe/);
    });

    // Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`.
    // Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener
    // un valor válido`.
    
});