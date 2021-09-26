const Alexa = require('ask-sdk-core');
const Handlers = require('./src/handlers');

const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        Handlers.LaunchRequestHandler,
        Handlers.HelloWorldIntentHandler,
        Handlers.ShowProductsIntentHandler,
        Handlers.HelpIntentHandler,
        Handlers.CancelAndStopIntentHandler,
        Handlers.FallbackIntentHandler,
        Handlers.SessionEndedRequestHandler,
        Handlers.IntentReflectorHandler
    )
    .addErrorHandlers(
        Handlers.ErrorHandler
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();

module.exports = {
    handler
}