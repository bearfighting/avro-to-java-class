const convert = (object: Records | null) => {
    if (!object) {
        return "";
    }

    let res = "";

    res += "public class " + object.name + "{\n";

    for (const field of object.fields) {
        if (typeof(field.type) === 'string') {
            res += "    " + "private" + " " + field.type + " " + field.name + ";\n";
        }
    }

    res += "}\n";
    return res;
}

export default convert;