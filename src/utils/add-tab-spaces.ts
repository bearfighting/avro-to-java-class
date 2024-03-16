import { ONE_SPACE_STRING } from "./constant-values";

const addTabSpaces = (offset: number = 1, defaultSpaces: number = 4) => {
    let res = "";
    for (let i = 0; i < defaultSpaces * offset; i++) {
        res += ONE_SPACE_STRING;
    }

    return res;
}

export default addTabSpaces;