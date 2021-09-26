const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('shop voice')
    .addIntent({ name: "AMAZON.StopIntent" })
    .addIntent({ name: "AMAZON.NavigateHomeIntent" })
    .addIntent({ name: "AMAZON.HelpIntent" })
    .addIntent({ name: "AMAZON.CancelItem" })
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');