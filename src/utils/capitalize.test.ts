import capitalize from "./capitalize"

describe("Tests of the function capitalize", () => {
    it("should return empty string if the string is empty", () => {
        expect(capitalize("")).toBe("");
    })

    it("should return one upper case string if the string has one letter", () => {
        expect(capitalize("a")).toBe("A");
    })

    it("should return capitalized string if the string has more than one letter", () => {
        expect(capitalize("azzzz")).toBe("Azzzz");
    })
})