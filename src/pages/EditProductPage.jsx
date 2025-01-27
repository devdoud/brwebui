import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Formik } from 'formik';
import { MyTextInput } from '../helpers';
import { Header } from '../components';
import axios from 'axios';

export function EditProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/products/${productId}`, product);
            navigate('/products');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="">
            <Header />
            <div className="grid grid-cols-12 h-full sm:my-8 mt-14">

                <div className="container mx-auto p-4 w-full col-span-10 col-start-2 col-end-12">
                    <h2 className="text-2xl text-center text-[#292929] font-bold mb-4">Modifier le produit</h2>
                    {/* <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Nom
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Prix
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Enregistrer</button>
                            <button type="button" onClick={() => navigate('/products')} className="px-4 py-2 bg-gray-300 rounded">Annuler</button>
                        </div>
                    </form> */}
                    <Formik
                      initialValues={{
                        name: '',
                        description: '',
                        price: '',
                      }}
                      validatioSchema={{

                      }}  
                      onsSubmit={handleSubmit}
                    >


                    </Formik>
                </div>

            </div>
        </div>
    );
}