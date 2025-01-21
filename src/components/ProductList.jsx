import { Product } from "./Product";

export function ProductList () {
    return (
        <div className="grid grid-cols-12 mt-8 h-scree">
            <div className="grid grid-flow-row  grid-cols-3 col-span-10 col-start-3 col-end-11 h-full w-full gap-x-4 gap-y-4">
                <Product 
                    image={"src/assets/images/diffparfum.jpg"}
                />
                <Product 
                    image={"src/assets/images/diffparfum.jpg"}
                />
                <Product 
                    image={"src/assets/images/diffparfum.jpg"}
                />
                <Product 
                    image={"src/assets/images/diffparfum.jpg"}
                />
                <Product 
                    image={"src/assets/images/diffparfum.jpg"}
                />
                <Product 
                    image={"src/assets/images/diffparfum.jpg"}
                />
                
            </div>
        </div>
    );
}