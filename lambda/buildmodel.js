const { ControlInteractionModelGenerator } = require('ask-sdk-controls');

new ControlInteractionModelGenerator()
    .withInvocationName('shop voice')
    .addIntent({ name: "AMAZON.StopIntent" })
    .addIntent({ name: "AMAZON.NavigateHomeIntent" })
    .addIntent({ name: "AMAZON.HelpIntent" })
    .addIntent({ name: "AMAZON.CancelItem" })
    .addIntent({ name: "HelloIntent", samples: [
        "hello",
        "say hi world",
        "say hellow world",
    ]})
    .addIntent({ name: "ShowProductsIntent", samples: [
        "products",
        "product",
        "show me products",
        "list me products",
        "show products",
        "list products",
        "show product",
        "list product",
        "what you got?",
        "show me all the products",
        "show me all products",
        "show me all",
        "show me",
        "show",
    ]}) 
    .buildAndWrite('../skill-package/interactionModels/custom/en-US.json');