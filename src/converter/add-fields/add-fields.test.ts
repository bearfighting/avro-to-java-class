import { FOUR_SPACES_STRING, NEW_LINE, ONE_SPACE_STRING, SEMI_COLON } from "../../utils/constant-values";
import addFields from "./add-fields";

describe("tests of the addFields function", () => {
    it("Should return empty string if the fields array is empty", () => {
        const sample: Array<Field> = [];
        const res = "";

        expect(addFields(sample)).toBe(res);
    })

    it("Should return one field string as expected", () => {

        const sample: Array<Field> = [{name: "Person", type: "int"}];
        const res = FOUR_SPACES_STRING 
                    + FOUR_SPACES_STRING 
                    + "private" 
                    + ONE_SPACE_STRING 
                    + "int" 
                    + ONE_SPACE_STRING 
                    + "Person" 
                    + SEMI_COLON + NEW_LINE;

        expect(addFields(sample)).toBe(res);
    })

    it("Should return two fields string as expected", () => {

        const sample: Array<Field> = [{name: "Person", type: "int"}, {name: "grade", type: "double"}];
        const res = FOUR_SPACES_STRING + FOUR_SPACES_STRING + "private" + ONE_SPACE_STRING + "int" + ONE_SPACE_STRING + "Person" + SEMI_COLON + NEW_LINE
                    + FOUR_SPACES_STRING + FOUR_SPACES_STRING + "private" + ONE_SPACE_STRING + "double" + ONE_SPACE_STRING + "grade" + SEMI_COLON + NEW_LINE

        expect(addFields(sample)).toBe(res);
    })

    it("Should return a field string for a field with Maps type", () => {
        const type0: Maps = {name: "lili", type: "map", key: "string", value: "string"};
        const type1: Field = {name: "Parent", type: type0};
        const sample: Array<Field> = [type1];
        const res = FOUR_SPACES_STRING 
                    + FOUR_SPACES_STRING 
                    + "private" 
                    + ONE_SPACE_STRING 
                    + "Map<String,String>"
                    + ONE_SPACE_STRING
                    + "lili"
                    + SEMI_COLON
                    + NEW_LINE;
        expect(addFields(sample)).toBe(res);
    })
})