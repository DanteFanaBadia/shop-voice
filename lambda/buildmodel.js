const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('hello world')
    .addIntent({ name: "AMAZON.StopIntent" })
    .addIntent({ name: "AMAZON.NavigateHomeIntent" })
    .addIntent({ name: "AMAZON.HelpIntent" })
    .addIntent({ name: "AMAZON.CancelItem" })

    .addIntent({ name: "HelloIntent", samples: [
        "hello",
        "say hi world",
        "say hellow world",
    ]})
    
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');