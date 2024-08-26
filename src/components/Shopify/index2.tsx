
// https://shopify.github.io/js-buy-sdk/

import { Card } from "react-bootstrap";


import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'trustlove.shop',
    storefrontAccessToken: 'e6676d8f9c93631fdc54a88e2e7d5032'
  });

const Shopify = () => {
// Fetch all products in your shop


client.product.fetchAll().then((products) => {
    // Do something with the products
    console.log(JSON.stringify(products));

    return (
        <>
          
              <Card>
              {products && products.map( product => (
            JSON.stringify(product)
          ))}
                <button onClick={() => alert("Button clicked!")}>
                  Example button
                </button>
              </Card>
            
        </>
      );
  });
  
  /**
   * 
  // Fetch a single product by ID
  const productId = 'gid://shopify/Product/7857989384';
  
  client.product.fetch(productId).then((product) => {
    // Do something with the product
    console.log(product);
  });
  
  // Fetch a single product by Handle
  const handle = 'product-handle';
  
  client.product.fetchByHandle(handle).then((product) => {
    // Do something with the product
    console.log(product);
  });

   */
  
    
};

export default Shopify;
