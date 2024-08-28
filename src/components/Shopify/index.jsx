import { Component } from 'react';
import Client from 'shopify-buy';
import Products from './components/Products';

class Shopify extends Component {
  constructor() {
    super();

    this.client = Client.buildClient({
      domain: 'trustlove.shop',
      storefrontAccessToken: 'e6676d8f9c93631fdc54a88e2e7d5032'
    });
  
    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };


    
    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    
    this.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.client.product.fetchAll().then((res) => {
      console.log("YO: " + products);
      this.setState({
        products: res,
      });
    });

    this.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });

  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return this.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          
          <div className="App__title">
            <h1>{this.state.shop.name} Online Store</h1>
            <p>{this.state.shop.description}</p>
          </div>
        </header>
        <Products
          products={this.state.products}
          client={this.client}
          addVariantToCart={this.addVariantToCart}
        />
        {!this.state.isCartOpen &&
            <div className="App__view-cart-wrapper">
              <button className="App__view-cart" onClick={()=> this.setState({isCartOpen: true})}>Cart</button>
            </div>
          }
      </div>
    );
  }
}

export default Shopify;
