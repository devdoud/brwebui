import { Product } from "./Product";
import { useState } from "react";

export function ProductList ({ products, onProductClick }) {

    return (
        <div className="grid grid-cols-12 mt-8 h-scree">
            <div className="grid grid-flow-row  sm:grid-cols-3 grid-cols-1 col-span-10 col-start-3 col-end-11 h-full w-full gap-x-4 gap-y-4">
                {
                    products.map((product, index) => (
                        <Product 
                            key={index}
                            image={"src/assets/images/diffparfum.jpg"} 
                            name={product.name}  
                            description={product.description} 
                            price={product.price}
                            onProductClick={onProductClick}
                        />
                    ))
                }
                
            </div>
        </div>
    );
}