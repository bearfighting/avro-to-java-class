import addTabSpaces from "../utils/add-tab-spaces";
import addFields from "./add-fields/add-fields";

const convert = (object?: Records, hasGetter: boolean = true, hasSetter: boolean = false) => {
    if (!object) {
        return "";
    }

    let res = "";

    res += "public class " + object.name + "{\n";

    res += addFields(object.fields);

    if (hasGetter) {
        for (const field of object.fields) {
            if (typeof (field.type === 'string')) {
                res += addTabSpaces()
                    + "public" + " "
                    + field.type
                    + " "
                    + field.name
                    + "()"
                    + "{\n"
                    + addTabSpaces(2)
                    + "return "
                    + "this."
                    + field.name
                    + ";\n"
                    + "}\n";
            }
        }
    }

    if (hasSetter) {

    }

    res += "}\n";
    return res;
}

export default convert;