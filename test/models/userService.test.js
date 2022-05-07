const UserService = require("../../app/services/userService");

describe("Test for UserServices", () => {
    test("1. Create a new user usign the UserService", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo");

        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).not.toBeUndefined();
        expect(user.bio).not.toBeNull();
    });

    test("2. Get all user data un a list", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo");

        const userInfoList = UserService.getInfo(user);
        
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("carlogilmar");
        expect(userInfoList[2]).toBe("Carlo");
        expect(userInfoList[3]).toBe("Sin bio");
    });

    test("", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo");

        UserService.updateUserUsername(user, "carlog");
        expect(user.username).toBe("carlog");
    });
});