const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('daily product')
    .addIntent({ name: 'AMAZON.StopIntent' })
    .addIntent({ name: 'AMAZON.NavigateHomeIntent' })
    .addIntent({ name: 'AMAZON.HelpIntent' })
    .addIntent({ name: 'AMAZON.CancelIntent' })

    // Add a custom intent
    .addIntent({ 
        name: 'ShowProductOfTheDayIntent', 
        samples: [
            "show me a new product",
            "show me a product",
            "show product",
        ]
    })
    // .addIntent({ 
    //     name: "AddProductIntent", 
    //     samples: [
            
    //     ]
    // })
    // .addDialogIntents({
    //     name:  "AddProductIntent",
    //     confirmationRequired: true,
    //     prompts: {
    //         confirmation: "Confirm.Intent.1"
    //     },
    //     delegationStrategy: 'ALWAYS'
    // }).addPrompt({
    //     id: "Confirm.Intent.1",
    //     variations: [
    //         {
    //             type: "PlainText",
    //             value: "That's did I get that right?"
    //         }
    //     ]
    // })

    // Build and write (be careful, this overwrites your existing model!!!)
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');