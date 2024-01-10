import React from "react";
import { Link } from "react-router-dom";
import './truncate-text.css';
const Product = (props) => {
//   console.log(props);
const { product , showButton } = props; 

return (
    <>
    <div className="card">
        <img src={product.image} className="card-img-top" 
        style={{"height":"250px", "objectFit":"contain"}} alt={product.title} />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p  className="truncate-text">{product.description}</p>
            <p> Price: {product.price}$</p>
            {showButton &&(
              <Link className="btn btn-primary" to={`/product/${product.id}`}>Details
              </Link> 
            )}
        </div>
    </div>
    </>
);
};
export default Product;


