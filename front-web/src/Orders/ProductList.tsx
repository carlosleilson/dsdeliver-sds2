import { checkIsSelected } from "./herpes";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    Products : Product[];
    selectedProducts : Product[];
    onSelectProduct:(product: Product) => void;
}

function ProductList({Products,selectedProducts,onSelectProduct}:Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
               {Products.map(product => (
                   <ProductCard 
                   key={product.id} 
                   product={product}
                   onSelectProduct={onSelectProduct}
                   isSelected={checkIsSelected(selectedProducts,product)}
                   />
               ))}
            </div>
        </div>
    )
}

export default ProductList;