import React from "react";
import "../css/product.css";
import "../css/generic-styles.css";
import { ProductProps, ProductState } from "./interfaces";
import { Link } from "react-router-dom";

export class Product extends React.Component<ProductProps, ProductState> {
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
    const path: string = "/products/" + this.state.id;

    return (
      <div className="custom-container">
        <div className="column box" key={this.state.id}>
          <div className="buttons has-addons is-centered">
            <div className="thumbnail">
              <h2>Product: {this.state.name}</h2>
              <p>
                <img className="thumbnail" src={this.state.picture} alt="Picture not available" />
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td className="thumbnail">{this.state.name}</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td className="thumbnail">{this.state.category}</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td className="thumbnail">{this.state.price}</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td className="thumbnail">{this.state.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="buttons has-addons is-centered">
            <button className="button">
              <Link to={path}>See product</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
