import convert from "./index";

const r1: Records = {
    name: "Person",
    type: "record",
    fields: [
    ]
}

const r2: Records = {
    name: "Person",
    type: "record",
    fields: [
        // {name: "Person", type: {name: "age", type: "int" }}
        {name: "age", type: "int"}
    ]
}

describe("Convert functin test", () => {
    test("The input value is null", () => {
        expect(convert(null)).toBe("");
    })

    test("The class name is properly set", () => {
        expect(convert(r1)).toBe("public class Person{\n}\n");
    })

    test("The class contains a field of name age and type int", () => {
        const res = 'public class Person{\n'
                    + '    private int age;\n'
                    + '}\n';

        expect(convert(r2)).toBe(res);
    })
})