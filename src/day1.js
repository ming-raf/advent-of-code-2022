"use strict";
exports.__esModule = true;
var fs = require("fs");
var Day1 = /** @class */ (function () {
    function Day1() {
    }
    Day1.prototype.doStuff = function () {
        var file = fs.readFileSync('input.txt', 'utf8');
        var content = file.split('\n');
        console.log(content);
    };
    return Day1;
}());
var day1 = new Day1();
day1.doStuff();
