const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('shop voice')
    .addIntent({ name: 'AMAZON.StopIntent' })
    .addIntent({ name: 'AMAZON.NavigateHomeIntent' })
    .addIntent({ name: 'AMAZON.HelpIntent' })
    .addIntent({ name: 'AMAZON.CancelIntent' })

    // Add a custom intent
    .addIntent({ 
        name: 'ShowProductsIntent', 
        samples: [
            "show me all the products",
            "show me all products",
            "show me products",
            "show products"
        ]
    })
    .addIntent({ 
        name: "AddProductIntent", 
        samples: [
            
        ]
    })
    .addDialogIntents({
        name:  "AddProductIntent",
        confirmationRequired: true,
        prompts: {
            confirmation: "Confirm.Intent.1"
        },
        delegationStrategy: 'ALWAYS'
    }).addPrompt({
        id: "Confirm.Intent.1",
        variations: [
            {
                type: "PlainText",
                value: "That's did I get that right?"
            }
        ]
    })

    // Build and write (be careful, this overwrites your existing model!!!)
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');