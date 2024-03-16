const addBlankLines = (lineNumber: number = 1) => {
    let res = "";
    for (let i = 0; i < lineNumber; i++) {
        res += "\n";
    }

    return res;
}

export default addBlankLines;