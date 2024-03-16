import addTabSpaces from "./add-tab-spaces";

const twoSpaces = "  ";
const fourSpaces = "    ";

describe("test of the addTabSpaces function", () => {
    it("should return 4 spaces of string with default parameters", () => {
        const res = fourSpaces;
        expect(addTabSpaces()).toBe(res);
    })

    it("should return 8 spaces of string with offset 2", () => {
        const res = fourSpaces + fourSpaces;
        expect(addTabSpaces(2)).toBe(res);
    })
})