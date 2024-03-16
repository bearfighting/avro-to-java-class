import addTabSpaces from "../../utils/add-tab-spaces";
import capitalize from "../../utils/capitalize";
import { NEW_LINE, ONE_SPACE_STRING, SEMI_COLON } from "../../utils/constant-values";

const addFields = (fields: Array<Field>, visibility: Visibility = "private") => {
    let res = "";

    for (const field of fields) {
        if (typeof (field.type) === 'string') {
            res += addTabSpaces(2) 
                + "private" 
                + ONE_SPACE_STRING 
                + field.type 
                + ONE_SPACE_STRING 
                + field.name 
                + SEMI_COLON 
                + NEW_LINE;
        } else {
            console.log("The field type", field.type);
            res += addTabSpaces(2) + "private" + ONE_SPACE_STRING;
            switch (field.type.type) {
                case "map": {res += "Map" 
                                + "<" 
                                + capitalize(field.type.key )
                                + "," 
                                + capitalize(field.type.value) 
                                + ">"; 
                            break;}
                default: {throw new Error("Unsupported value type"); break;}
            }
            res += ONE_SPACE_STRING + field.type.name + SEMI_COLON + NEW_LINE;
        }
    }

    return res;
}

export default addFields;