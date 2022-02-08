/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");



// SINGLE FILE MOCKING

// beforeEach(() => {
//     document.getElementById.innerHTML = '<p id="par"></p>'
// })

// describe("DOM tests", () => {
//     test("expect p content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
//     })
// })

// MOCK TESTING MORE THAN ONE DOM

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expect p conent to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toEqual(1);
    });
});