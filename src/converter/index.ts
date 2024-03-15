const convert = (object: Records | null) => {
    if (!object) {
        return "";
    }

    let res = "";

    res += "public class " + object.name + "{\n" + "}\n";

    return res;
}

export default convert;