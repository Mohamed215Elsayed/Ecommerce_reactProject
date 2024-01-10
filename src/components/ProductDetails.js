import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((product) => setProduct(product))
        .catch((err) => console.log(err));
    }, [params.productId]);
  return (
    <>
    <div className="container my-5 py-5 text-center bg-light rounded-3 h-50 w-50  text-dark p-3 m-auto" >
    <Product product={product} showButton={false} />
    </div>
    </>
  )
}
export default ProductDetails;
