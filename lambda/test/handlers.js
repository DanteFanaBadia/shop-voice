const { SkillTester, waitForDebugger, TestInput } = require('ask-sdk-controls');
const { expect } = require('chai');
const { suite, test } = require('mocha');
const { LaunchRequestHandler, ShowProductsIntentHandler } = require('../src/handlers');
const { shopifyServices } = require('../src/services');

waitForDebugger();

suite("Handlers", () => {
    test("Launch", async () => {
        const tester = new SkillTester(LaunchRequestHandler);
        const testResponseObj = await tester.testTurn("U: __", TestInput.launchRequest(), `A: Welcome to ShopVoice,  here you can say things like "let\'s search a product", "show me all the products" and "let\'s place an order".`);
        expect(testResponseObj.response.shouldEndSession).equals(false);
    });

    test("Products", async () => {
        const tester = new SkillTester(ShowProductsIntentHandler);
        const testResponseObj = await tester.testTurn("U: products", TestInput.intent('ShowProductsIntent'), `A: This are ours products`);
        expect(testResponseObj.response.shouldEndSession).equals(false);
    });
})