import addBlankLines from "./add-blank-lines";

describe("test addBlankLines", () => {
    test("test of the default parameter with 1", () => {
        const res = "\n";
        expect(addBlankLines()).toBe(res);
    })

    test("test of the parameter with 2", () => {
        const res = "\n\n";
        expect(addBlankLines(2)).toBe(res);
    })

    test("test of the paramter with 0", () => {
        const res = "";
        expect(addBlankLines(0)).toBe(res);
    })
})