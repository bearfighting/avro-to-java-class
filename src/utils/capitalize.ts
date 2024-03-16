const capitalize = (s: string) => {
    if (s.length > 1) {
        return s.charAt(0).toUpperCase() + s.substring(1);
    } else {
        return s.length === 1 ? s.toUpperCase() : s;
    }
}

export default capitalize;