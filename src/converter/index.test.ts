import convert from "./index";

const r: Records = {
    name: "Person",
    type: "record",
    fields: [
        {name: "Person", type: {name: "age", type: "int" }}
    ]
}

describe("Convert functin test", () => {
    test("The input value is null", () => {
        expect(convert(null)).toBe("");
    })

    test("The class name is properly set", () => {
        expect(convert(r)).toBe("public class Person{\n}\n");
    })
})