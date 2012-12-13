
// NOTES:
//  - there is a skip variable below that's used to skip tests from widlproc
//    that are known to be faulty. Make sure it's up to date.
//  - the files in json actually still need to be reviewed to check that they
//    are fully correct interpretations of the IDLs

var wp = require("../")
,   expect = require("expect.js")
,   pth = require("path")
,   fs = require("fs")
,   jdp = require("jsondiffpatch")
,   debug = true
;
describe("Parses all of the IDLs to produce the correct ASTs", function () {
    var dir = pth.join(__dirname, "widlproc/test/valid/idl")
    ,   skip = {}
    ,   idls = fs.readdirSync(dir)
                  .filter(function (it) { return (/\.widl$/).test(it) && !skip[it]; })
                  .map(function (it) { return pth.join(dir, it); })
    ,   jsons = idls.map(function (it) { return pth.join(__dirname, "json", pth.basename(it).replace(".widl", ".json")); })
    ;
    
    for (var i = 0, n = idls.length; i < n; i++) {
        var idl = idls[i], json = jsons[i];
        var func = (function (idl, json) {
            return function () {
                try {
                    // the AST contains NaN and +/-Infinity that cannot be serialised to JSON
                    // the stored JSON ASTs use the same replacement function as is used below
                    // so we compare based on that
                    var replacer = function (key, value) {
                            if (isNaN(value)) return { isNaN: true };
                            if (!isFinite(value)) {
                                if (value < 0) return { isInifinite: true, sign: "-" };
                                return { isInifinite: true, sign: "+" };
                            }
                            return value;
                        }
                    ,   parsed = JSON.parse(JSON.stringify(wp.parse(fs.readFileSync(idl, "utf8")), replacer))
                    ,   diff = jdp.diff(JSON.parse(fs.readFileSync(json, "utf8")),
                                        parsed);
                    if (diff && debug) console.log(JSON.stringify(diff, null, 4));
                    expect(diff).to.be(undefined);
                }
                catch (e) {
                    console.log(e.toString());
                    throw e;
                }
            };
        }(idl, json));
        it("should produce the same AST for " + idl, func);
    }
});