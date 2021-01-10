import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    Products : Product[];
}

function ProductList({Products}:Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
               {Products.map(product => (
                   <ProductCard key={product.id} product={product}/>
               ))}
            </div>
        </div>
    )
}

export default ProductList;