const { expect } = require('chai');
const { suite, test } = require('mocha');
const { shopifyServices } = require('../src/services');


suite("Services", () => {
    test("Get Products", async () => {
        const products = await shopifyServices.getProducts({});
        expect(products).to.be.not.empty;
    });
    test("Get Customer", async () => {
        const customer = await shopifyServices.getCustomer({ email: 'dfana@dfb.com.do'});
        expect(customer).to.be.ok;
    });
    test("Get Orders", async () => {
        const orders = await shopifyServices.getOrders({ email: 'dfana@dfb.com.do'});
        expect(orders).to.be.not.empty;
    });
    test("Placer Order", async () => {
        const data = {
            email: 'dfana@dfb.com.do',
            items: [
                {
                    variantId: 40800983154865,
                    quantity: 1
                }
            ]
        };
        const orderPlaced = await shopifyServices.placerOrder(data);
        expect(orderPlaced).to.be.ok;
    });
})