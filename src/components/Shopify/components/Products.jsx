import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";

class Products extends Component {
  render() {
    let products = this.props.products.map((product, idx) => {
      return (
        <Card key={idx}>
          <h3>{product.title}:</h3>

          {product.descriptionHtml}

          {typeof product.images[0] !== "undefined" && (
            <Image src={product.images[0].src} />
          )}
        </Card>
      );
    });

    return <div className="Product-wrapper">{products}</div>;
  }
}

export default Products;
