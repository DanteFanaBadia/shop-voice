const Alexa = require('ask-sdk-core');
const Intents = require('../intents');

const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        Intents.LaunchRequestHandler,
        Intents.HelloWorldIntentHandler,
        Intents.HelpIntentHandler,
        Intents.CancelAndStopIntentHandler,
        Intents.FallbackIntentHandler,
        Intents.SessionEndedRequestHandler,
        Intents.IntentReflectorHandler
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();

module.exports = {
    handler
}