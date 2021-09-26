const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('shop voice')
    .addIntent({ name: 'AMAZON.StopIntent' })
    .addIntent({ name: 'AMAZON.NavigateHomeIntent' })
    .addIntent({ name: 'AMAZON.HelpIntent' })
    .addIntent({ name: 'AMAZON.CancelIntent' })

    // Add a custom intent
    .addIntent({ name: 'ShowProductsIntent', samples: [
        "hello",
        "how are you",
        "say hi world",
        "say hi",
        "hi",
        "say hello world",
        "say hello"
    ]})

    // Build and write (be careful, this overwrites your existing model!!!)
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');