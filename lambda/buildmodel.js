const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('shop voice')
    .addIntent({ name: "AMAZON.StopIntent", samples: [] })
    .addIntent({ name: "AMAZON.NavigateHomeIntent", samples: [] })
    .addIntent({ name: "AMAZON.HelpIntent", samples: [] })
    .addIntent({ name: "AMAZON.CancelIntent", samples: [] })
    .addIntent({ 
        name: "ShowProductsIntent", 
        samples: [
            "show me products",
            "list me products",
            "show products",
            "list products",
            "show product",
            "list product",
            "show me all the products",
            "show me all products",
        ],
        slots: [],
    })
    .addIntent({

    })
    .buildAndWrite('../skill-package/interactionModels/custom/en-US-generated.json');