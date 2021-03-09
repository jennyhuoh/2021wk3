import ProductItem from "./ProductItems";
import products from "../json/products.json";

export default function ProductList(){
    return(
        <div className="main1 row products">
            {products.map(product => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
    );
}