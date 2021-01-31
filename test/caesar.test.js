const caesar = require("../src/caesar.js")
const expect = require("chai").expect 

/*
caesar() encoding a message should allow for a negative shift that will shift to the left
caesar() decoding a message should appropriately handle letters at the end of the alphabet
*/

describe("caesar", () => {
    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        const actual = caesar("thinkful", -26)
        expect(actual).to.be.false
    })
    it("should ignore capital letters", () => {
        const actual = caesar("THIS IS A SECRET MESSAGE!", 8); //> 'bpqa qa i amkzmb umaaiom!'
        const expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected)
    })
    it("should allow for a negative shift that will shift to the left.", () => {
        const actual = caesar("thinkful", -3); //> 'qefkhcri'
        const expected = 'qefkhcri'
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols in the message.", () => {
        const actual = caesar("There are spaces in this sentence and characters such as !@#$%%@#%^_)(*&!", 20);
        const expected = 'nbyly uly mjuwym ch nbcm myhnyhwy uhx wbuluwnylm mowb um !@#$%%@#%^_)(*&!'
        expect(actual).to.equal(expected)
    })
    it("should return a decoded message based on the encode argument.", () => {
        const actual = caesar("wklqnixo", 3, false); //> 'thinkful' 
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })
    it("should appropriately handle letters at the end of the alphabet.", () => {
        const actual = caesar("abc", 3, false); //> 'abc' 
        const expected = 'xyz'
        expect(actual).to.equal(expected)
    })
})