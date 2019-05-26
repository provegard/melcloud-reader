exports.flatMap = (array, fun) => {
    if (!Array.isArray(array)) {
        throw new Error("Not an array: " + array);
    }
    if (typeof fun !== "function") {
        throw new Error("Not a function: " + fun);
    }
    const newArrays = array.map(fun);
    return Array.prototype.concat.apply([], newArrays);
};