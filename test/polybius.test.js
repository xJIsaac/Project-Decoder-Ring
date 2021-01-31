const polybius = require("../src/polybius.js")
const expect = require("chai").expect 

describe("polybius", () => {
    it("When encoding, it should translate the letters i and j to 42.", () => {
        const actual = polybius("ijij");
        expect(actual).to.equal("42424242")
    })
    it("When decoding, it translates 42 to (i/j).", () => {
        const actual = polybius("424242 42", false);
        expect(actual).to.equal("(i/j)(i/j)(i/j) (i/j)")
    })
    it("It ignores capital letters.", () => {
        const actual = polybius("A Message a message");
        const expected = "11 23513434112251 11 23513434112251"
        expect(actual).to.equal(expected)
    })
    it("It maintains spaces in the message, before and after encoding.", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("It maintains spaces in the message, before and after decoding.", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("When decoding, it should return false if the number of characters in the string exluding spaces is uneven", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false
    })
})