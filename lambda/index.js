const Alexa = require('ask-sdk-core');
const Handlers = require('./src/handlers');

const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        Handlers.LaunchRequestHandler,
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
    .withCustomUserAgent('pucmm-isc/shop-voice/v1.0')
    .lambda();

module.exports = {
    handler
}