const { coinMachine } = require('./coin-machine.js');

describe("Coin Machine Tests", () => {

    // Tests that causes 100% mutation coverage

    // test("it will return single pound coin", () => {
    //     expect(coinMachine(100))
    //         .toEqual("1x£1");
    // });
    // test("it will return single 2 pound coin", () => {
    //     expect(coinMachine(200))
    //         .toEqual("1x£2");
    // });
    // test("it will return multiple coins", () => {
    //     expect(coinMachine(201))
    //         .toEqual("1x£2 1x1p");
    // });
    // test("it will return multiple penny coins", () => {
    //     expect(coinMachine(3))
    //         .toEqual("1x2p 1x1p");
    // });
    // test("it will handle multiple coins from a decorated format", () => {
    //     expect(coinMachine('£0.03'))
    //         .toEqual("1x2p 1x1p");
    // });

    // Tests that causes 100% code coverage

    test("it will return single penny from a decorated format", () => {
        expect(coinMachine('£0.01'))
            .toEqual("1x1p");
    });
    test("it will return single penny from a numerical format", () => {
        expect(coinMachine('1'))
            .toEqual("1x1p");
    });
});

