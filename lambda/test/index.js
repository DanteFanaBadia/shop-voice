const { SkillTester, waitForDebugger, TestInput } = require('ask-sdk-controls');
const { expect } = require('chai');
const { suite, test } = require('mocha');
const { LaunchRequestHandler } = require('..');

waitForDebugger();

suite("all", () => {
    test("Launch", async () => {
        const tester = new SkillTester(LaunchRequestHandler);
        const testResponseObj = await tester.testTurn("U: __", TestInput.launchRequest(), "A: Welcome, you can say Hello or Help. Which would you like to try?");
        expect(testResponseObj.response.shouldEndSession).equals(false);
    });
})