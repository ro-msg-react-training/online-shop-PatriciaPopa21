import React, { Component } from "react";
import data from "../products.json";
import { Product } from "./ProductComponent";

class ProductsTable extends React.Component<{}, { products: any }> {
   constructor(props: any) {
      super(props);
      const productsAsJson = JSON.stringify(data);
      const parsedProductsList: any[] = JSON.parse(productsAsJson);
      this.state = {
         products: parsedProductsList,
      };
   }

   render() {
      const productsPerRow = 5;
      let content: any[] = [];

      let productRows = this.chunk(this.state.products, productsPerRow);

      this.renderProductsTable(productRows, content);

      return (
         <div className="container is-fluid">
            <h1 className="title is-1 has-text-centered">Products</h1>
            <br />
            <br />
            {content}
         </div>
      );
   }

   private chunk(array: any[], size: number) {
      const chunkedArr = [];
      let index = 0;

      while (index < array.length) {
         chunkedArr.push(array.slice(index, index + size));
         index += size;
      }

      return chunkedArr;
   }

   private renderProductsTable(productRows: any[][], content: any[]) {
      productRows.forEach((productRow: any[], index: number) => {
         content.push(
            <div className="columns is-mobile is-multiline is-centered" key={index}>
               {this.renderRow(productRow)}
            </div>
         );
      });
   }

   private renderRow(productRow: any[]) {
      return productRow.map((product: any[]) => {
         return this.renderProduct(product);
      });
   }

   private renderProduct(product: any) {
      const { id, category, name, description, price, image } = product; //destructuring
      return (
         <div key={id}>
            <Product
               key={id}
               id={id}
               category={category}
               description={description}
               name={name}
               price={price}
               picture={image}
            />
         </div>
      );
   }
}

export default ProductsTable;
