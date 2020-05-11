import React from "react";
import "../css/product-details.css";
import "../css/generic-styles.css";
import { ProductProps, ProductState } from "./interfaces";
import { Link } from "react-router-dom";

export class ProductDetails extends React.Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);
    this.state = {
      id: props.id,
      category: props.category,
      name: props.name,
      description: props.description,
      price: props.price,
      picture: props.picture,
    };
  }

  render() {
    const path: string = "/todo";

    return (
      <div className="centerall">
        <div className="custom-box box" key={this.state.id}>
          <div className="buttons has-addons is-centered">
            <div className="product-details">
              <h2>Product: Notebook Basic 15</h2>
              <p>
                <img className="product-details" src="https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg" alt="Picture not available" />
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>Notebook Basic 15</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td>Laptops</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>956</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="buttons has-addons is-centered">
            <button className="button">
              <Link to={path}>Add to cart</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
