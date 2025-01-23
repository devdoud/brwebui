import { Header, Top, ProductList } from "../components";
import axios from "axios";
import { useState } from "react";

export function ProductsPage() {
    const [products, setProducts] = useState([{ id: 1, name: 'Product 1', description: 'Description 1', price: 10 }, { id: 2, name: 'Product 2', description: 'Description 2', price: 20 }]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleProductClick = (product) => {
        console.log('Product clicked:', product);
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`/api/products/${selectedProduct.id}`);
    //         setProducts(products.filter(product => product.id !== selectedProduct.id));
    //         setIsModalOpen(false);
    //     } catch (error) {
    //         console.error('Error deleting product:', error);
    //     }
    // };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };


    return (
        <div>
            <Top />
            <div className="absolute top-0 right-0 bg-transparent w-full">
                <Header />
                <ProductList 
                    products={products} 
                    onProductClick={handleProductClick}
                />
            </div>
            {isModalOpen && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-content bg-white p-6 rounded shadow-lg">
                        <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
                        <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                        <p className="text-sm text-gray-800">{selectedProduct.price} €</p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button  className="px-4 py-2 bg-blue-500 text-white rounded">Modifier</button>
                            <button  className="px-4 py-2 bg-red-500 text-white rounded">Supprimer</button>
                            <button onClick={closeModal}  className="px-4 py-2 bg-gray-300 rounded">Fermer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}