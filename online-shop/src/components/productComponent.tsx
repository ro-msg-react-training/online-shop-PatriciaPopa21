import React, { Component } from 'react';
import '../css/product.css';
import { ProductProps, ProductState } from './interfaces';

export class Product extends React.Component<ProductProps, ProductState> {
  constructor(props : ProductProps){
    super(props);
    this.state = {
      id: props.id,
      category: props.category,
      name: props.name,
      description: props.description,
      price: props.price,
      picture: props.picture
    };
  }

  render() {
    return (
      <div className="special">
        <h2>Product: {this.state.name}</h2>
        <p> <img src={this.state.picture} alt="Picture not available" width="100px" height="100px"/> </p>
        <table>
          <tbody>
            <tr>
              <td className="header">Name:</td>
              <td>{this.state.name}</td>
            </tr>
            <tr>
              <td className="header">Category:</td>
              <td>{this.state.category}</td>
            </tr>
            <tr>
              <td className="header">Price:</td>
              <td>{this.state.price}</td>
            </tr>
            <tr>
              <td className="header">Description:</td>
              <td>{this.state.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


