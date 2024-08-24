import React from "react";
import { Link } from "react-router-dom";


const PRODUCTS =[
  {id:'p1',title:'Product 1'},
  {id:'p2',title:'Product 2'},
  {id:'p3',title:'Product 3'},
  {id:'p4',title:'Product 4'},
 
]
const Products = () => {
  return <div>
    <h1>  Products</h1>
  
<ul>
  {PRODUCTS.map(prod=><li key={prod.id}>
    <Link to={prod.id} relative="path">{prod.title}</Link>
  </li>)}
  <li></li>

</ul>
  </div>;
};

export default Products;
