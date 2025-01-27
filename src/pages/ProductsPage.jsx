import { Header, Top, ProductList } from "../components";
import axios from "axios";
import { useState } from "react";

export function ProductsPage() {
    const [products, setProducts] = useState([{ id: 1, name: 'Product 1', description: 'Description 1', price: 100 }, { id: 2, name: 'Product 2', description: 'Description 2', price: 200 }, { id: 3, name: 'Product 3', description: 'Description 3', price: 300 }]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleProductClick = (product) => {
        console.log('Product clicked:', product);
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleEdit = () => {
        // Logique pour modifier le produit
        console.log('Modifier le produit:', selectedProduct);
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        console.log('Deleting product:', selectedProduct);
        try {
            // await axios.delete(`/api/products/${selectedProduct.id}`);
            setProducts(products.filter(product => product.name !== selectedProduct.name));
            console.log(products);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

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
                        <h3 className="sm:text-lg text-sm font-semibold">{selectedProduct.name}</h3>
                        <p className="sm:text-sm text-xs text-gray-600">{selectedProduct.description}</p>
                        <p className="sm:text-sm text-xs text-gray-800">{selectedProduct.price} €</p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button onClick={handleEdit}  className="sm:px-4 px-2 sm:py-2 py-1 bg-blue-500 text-white sm:text-sm text-xs rounded">Modifier</button>
                            <button onClick={handleDelete} className="sm:px-4 px-2 sm:py-2 py-1 bg-red-500 text-white sm:text-sm text-xs rounded">Supprimer</button>
                            <button onClick={closeModal}  className="sm:px-4 px-2 sm:py-2 py-1 bg-gray-300 sm:text-sm text-xs rounded">Fermer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}