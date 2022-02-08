const buttonClick = require("../button.");

beforeEach(() => {
    document.getElementById.innerHTML = '<p id="par"></p>'
})

describe("DOM tests", () => {
    test("expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    })
})