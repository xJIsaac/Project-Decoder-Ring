const substitution = require("../src/substitution.js")
const expect = require("chai").expect 

describe("substitution", () => {
    /*
    When building the function, keep the following constraints and rules in mind:

    The input could include spaces and letters as well as special characters such as #, $, *, etc.
    Spaces should be maintained throughout.
    Capital letters can be ignored.
    The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
    All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.

    substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
    substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

    substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
    substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

    substitution("thinkful", "short"); //> false
    substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
    */
    it("The input can include special characters such as #, $, *, etc.", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
        expect(actual).to.equal("message")
    })
    it("The input could include spaces and letters.", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal('elp xhm xf mbymwwmfj dne')
    })
    it("It ignores capital letters.", () => {
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
        const expected = 'jrufscpw'
        expect(actual).to.equal(expected)
    })
    it("The alphabet parameter must be a string of exactly 26 characters otherwise return false", () => {
        const actual = substitution("thinkful", "short"); //> false
        expect(actual).to.be.false
    })
    it("Spaces should be maintained throughout.", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal('elp xhm xf mbymwwmfj dne')
    })
    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
        expect(actual).to.be.false
    })
    it("Return false if the alphabet is missing.", () => {
        const actual = substitution("thinkful"); //> false
        expect(actual).to.be.false
    })
})