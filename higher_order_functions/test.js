console.log = function() {};
const {assert, expect} = require('chai')
const fs = require('fs');
const Structured = require('structured');
const rewire = require('rewire');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../app.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let structure = function () {
            checkConsistentOutput($funk, $val)
        };

        let varCallbacks = {
            "$funk, $val": function (funk, val) {
                let isFunc;
                let isVal;

                isVal = val ? true : false

                if (funk.type === 'ArrowFunctionExpression' || funk.type === 'FunctionExpression' || funk.type === 'Identifier'){
                    isFunc = true;
                } else {
                    isFunc = false
                }
                return (isFunc && isVal);
            }
        };
        let isMatch = Structured.match(code, structure, { varCallbacks: varCallbacks });
        assert.isOk(isMatch, 'Did you invoke your `checkConsistentOutput()` function with a function and a value?');
    });
});
