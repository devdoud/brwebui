import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';

export function Menu({ image, name, menuId }) {
    const [isActive, setIsActive] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const handleMenuClick = async () => {
        try {
            // const response = await axios.get(`/api/menus/${menuId}/products`);
            // setProducts(response.data);
            navigate(`/menus/${menuId}/products`);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simule un délai de 2 secondes

        return () => clearTimeout(timer);
    }, []);
    
    if(isLoading) {
        return(
            <div className="bg-gray-400 sm:h-60 h-40 rounded animate-pulse rounded-md">
                <div className="h-[75%] bg-gray-300 shadow"></div>
                <div className="p-2 flex gap-2 items-center sm:my-2 mt-2">
                    <div className="w-2/3 sm:h-6 h-3 bg-gray-200 shadow rounded"></div>
                    <div className="sm:h-6 h-3 bg-gray-200 w-1/3 shadow rounded"></div>
                </div>
            </div>
        );
    }
    
    return(
        <div onClick={handleMenuClick} className="bg-gray-200 sm:h-60 h-40 rounded shadow cursor-pointer">
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    height: '75%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '4px'
                }}
            ></div>
            <div className="p-2 flex items-center justify-between my-2">
                <h5 className="font-semibold text-[#292929] sm:text-sm text-xs">{ name }</h5>
                <div className={isActive ? "text-green-700 text-[.65rem] font-bold" : "text-red-500 text-[.65rem] font-bold"}>
                    {
                        isActive 
                        ? 
                            <div className="flex items-center gap-1 text-green-500 text-[.63rem] bg-gray-200 px-2 rounded-sm">
                                <span className="rounded-full bg-green-500 h-1.5 w-1.5"></span> Activé
                            </div> 
                        : 
                            <div className="flex items-center gap-1 text-red-500 text-[.63rem] bg-gray-200 px-2 rounded-sm">
                                <span className="rounded-full bg-red-500 h-1.5 w-1.5"></span> Fermé
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}