import { useEffect, useState } from "react";
import Product from "./Product";
const ProductsList = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    };
    const getCategories = () => {
        fetch(`${api_url}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err));
    };
    const getProductInCategory = (catName) => {
        console.log(catName);
        fetch(`${api_url}/category/${catName}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    };
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);
    return (
        <>
            <h2 className="text-center p-3"> Our Products </h2>
            <div className="container">
                <button className="btn btn-info p-3 borderRadius:5px"  onClick={() => { getProducts();}}>All</button>
                {categories.map((cat_name) =>{
                    return ( <button className="btn btn-info p-3 m-5 text-center borderRadius:10px translateY:scale(1.2) translateX:scale(1.2)" key={cat_name} onClick={() => getProductInCategory(cat_name)}>{cat_name}</button> );  
                }
                )}
                <div className="row">
                    {products.map((el) => (
                    <div className="col-3" key={el.id}>
                        <Product product={el} showButton={true} />
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default ProductsList;