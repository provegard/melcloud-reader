const { flatMap } = require("../lib/utils");

describe("flatMap", () => {
    it("flattens", () => {
        const result = flatMap([1], (_) => [2, 3]);
        expect(result).toEqual([2, 3]);
    });

    it("flattens multiple", () => {
        const result = flatMap([1, 2], (x) => [x * 2, x * 2 + 1]);
        expect(result).toEqual([2, 3, 4, 5]);
    });

    it("requires an array", () => {
        expect(() => flatMap("x", () => [])).toThrowError(/Not an array: x/);
    })

    it("requires an function", () => {
        expect(() => flatMap([], "x")).toThrowError(/Not a function: x/);
    })
});