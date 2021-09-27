const { shopifyConfig } = require('../config');
const axios = require('axios').default;

class ShopifyServices{
    
    #client;

    constructor(config = shopifyConfig){
        const token = Buffer.from(`${config.username}:${config.password}`).toString('base64');
        this.#client = axios.create({
            baseURL: config.baseUrl,
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }
          });
    }

    async getProducts({ sinceId = '', limit = 5, fields = 'id,images,title,variants,tags'}){
        try {
            return (await this.#client.get(`/products.json?limit=${limit}&fields=${fields}&since_id=${sinceId}`)).data.products;
        } catch(e) {
            throw e;
        }
        return 
    }

    async getCustomer({ email }){
        try {
            return (await this.#client.get(`/customers/search.json?query=email:${email}`)).data.customers[0];
        } catch(e) {
            throw e;
        }
    }

    async getOrders({ email }){
        try {
            const customer = await this.getCustomer({ email });
            return (await this.#client.get(`/customers/${customer.id}/orders.json`)).data.orders;
        } catch(e) {
            throw e;
        }
    }

    async placerOrder(order){
        try {
            const data = JSON.stringify({
                order: {
                    line_items: order.items.map((el) => {
                        return {
                            variant_id: el.variantId,
                            quantity: el.quantity
                        }
                    }),
                    customer: {
                        email: order.email
                    }
                }
            });
            return (await this.#client.post('/orders.json', data)).data.order;
        } catch(e) {
            throw e;
        }
    }
}

module.exports = {
    shopifyServices: new ShopifyServices(),
    ShopifyServices
}