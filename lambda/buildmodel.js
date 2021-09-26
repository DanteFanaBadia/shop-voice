const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('shop voice')
    .addIntent({ name: "AMAZON.StopIntent" })
    .addIntent({ name: "AMAZON.NavigateHomeIntent" })
    .addIntent({ name: "AMAZON.HelpIntent" })
    .addIntent({ name: "AMAZON.CancelItem" })
    .addIntent({ name: "ShowProductsIntent", samples: [
        "show me products",
        "list me products",
        "show products",
        "list products",
        "show product",
        "list product",
        "show me all the products",
        "show me all products",
    ]}) 
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');