const User = require("../../app/models/user");

describe("Unit Tests for the User class", () => {
    test("Create an User object", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio");

        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.dateCreated).not.toBeNull();
        expect(user.lastUpdated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeNull();
    });

    test("Add getters", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio");

        expect(user.getUsername).toBe("carlogilmar");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getDateCreated).not.toBeNull();
        expect(user.getLastUpdated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeNull();
    });

    test("Add setters", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio");

        user.setUsername = "Gilmar";
        expect(user.username).toBe("Gilmar");
        expect(user.getUsername).toBe("Gilmar");

        user.setBio = "New bio";
        expect(user.bio).toBe("New bio");
        expect(user.getBio).toBe("New bio");
    });
});