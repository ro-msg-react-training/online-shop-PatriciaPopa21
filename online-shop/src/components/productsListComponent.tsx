import React, { Component } from 'react';
import '../css/productsList.css';
import { Product } from './productComponent';
import data from '../products.json';

class ProductsTable extends React.Component<{}, { products: any }> {
   constructor(props: any) {
      super(props)
      const productsAsJson = JSON.stringify(data);
      const parsedProductsList: any[] = JSON.parse(productsAsJson);
      this.state = {
         // products: [
         //    { id: 1, category: 'Books', productName: 'Jane Eyre', description: 'blabla', price: 30, picture: 'logo192.png' },
         //    { id: 2, category: 'Books', productName: 'Brave new world', description: 'blabla', price: 25, picture: 'logo192.png' },
         //    { id: 3, category: 'Books', productName: 'Quo Vadis', description: 'blabla', price: 42, picture: 'logo192.png' },
         //    { id: 4, category: 'Books', productName: 'The Alchemist', description: 'blabla', price: 46, picture: 'logo192.png'},
         //    { id: 5, category: 'Watches', productName: 'Rolex', description: 'blabla', price: 9999, picture: 'logo192.png' },
         //    { id: 6, category: 'Watches', productName: 'GSchock', description: 'blabla', price: 678, picture: 'logo192.png'}
         // ],
         products: parsedProductsList
      }
   }

   render(){
      const productsPerRow = 3;
      let content: any[] = [];
      let productRows = this.chunk(this.state.products, productsPerRow);

      productRows.forEach((productRow: any[], index: number) =>{
          content.push(
            <div key={index}>
               <div key={index}>  
                  {this.renderRow(productRow)}
               </div>
            </div>
        )
      })

      return (
         <div className = "outer">
            <div>
               <h1>Products</h1>
               {content}
            </div>
         </div>
      );
   }

   chunk(array: any[], size: number) {
      const chunkedArr = [];
      let index = 0;
      while (index < array.length) {
         chunkedArr.push(array.slice(index, index+size));
         index += size;
      }

      return chunkedArr;
   }

    renderRow(productRow : any[]){
      return productRow.map((product: any[], index: number) =>{
         return this.renderProduct(product);
      })
    }

    renderProduct(product : any){
      const { id, category, name, description, price, image } = product //destructuring
      return (
            <Product key={id}
               id={id}
               category={category}
               description={description}
               name={name}
               price={price}
               picture={image}
            />
      )
    }

//    renderTableHeader() {
//       let header = ['Category', 'Product Name', 'Price', 'Picture'];
//       return header.map((colName, index) => {
//          return <th key={index}>{colName.toUpperCase()}</th>
//       })
//    }

//    renderTableData() {
//     return this.state.products.map((product: any, index: any) => {
//        const { id, category, productName, price, picture } = product //destructuring
//        return (
//           <tr key={id}>
//              <td>{category}</td>
//              <td>{productName}</td>
//              <td>{price}</td>
//              <td>{picture}</td>
//           </tr>
//        )
//     })
//  }

//    render() {
//       return (
//          <div>
//             <h1 id='title'>Products</h1>
//             <table id='products'>
//                <tbody>
//                   <tr>{this.renderTableHeader()}</tr>
//                   {this.renderTableData()}
//                </tbody>
//             </table>
//          </div>
//       )
//    }

}

export default ProductsTable