import { Header, Top, ProductList } from "../components";

export function ProductsPage() {
    return (
        <div>
            <Top />
            <div className="absolute top-0 right-0 bg-transparent w-full">
                <Header />
                <ProductList />
            </div>
        </div>
    );
}