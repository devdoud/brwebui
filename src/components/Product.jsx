import { useState, useEffect } from "react";

export function Product ({ image, name, description, price, onProductClick }) {
    const [isActive, setIsActive] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simule un délai de 2 secondes

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="bg-gray-400 h-64 rounded animate-pulse rounded-md">
                <div className="h-[60%] bg-gray-300 shadow"></div>
                <div className="p-2">
                    <div className="w-full flex gap-2 mb-2">
                        <div className="h-6 bg-gray-300 mb-2 w-3/4 shadow rounded"></div>  
                        <div className="h-6 bg-gray-300 mb-2 shadow w-1/4 rounded"></div>
                    </div>
                    
                    <div className="h-10 bg-gray-300 w-full shadow rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFC146] h-64 rounded cursor-pointer" onClick={() => onProductClick({ name, description, price })}>
            <div 
                style={{
                    backgroundImage: `url(${image})`,
                    height: '60%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '4px'
                }}
            >

            </div>
            <div className="p-2">
                <div className="flex align items-center justify-between mb-1">
                    <h6 className="font-medium text-[#292929] text-sm">{name}</h6>
                    <div className={isActive ? "text-green-700 text-[.65rem] font-bold" : "text-red-500 text-[.65rem] font-bold"}>
                        {
                            isActive 
                            ? 
                                <div className="flex items-center gap-1 text-green-500 text-[.63rem] bg-gray-300 px-2 rounded-md">
                                    <span className="rounded-full bg-green-500 h-1.5 w-1.5"></span> Activé
                                </div> 
                            : 
                                <div className="flex items-center gap-1 text-red-500 text-[.63rem]">
                                    <span className="rounded-full bg-red-500 h-1.5 w-1.5"></span> Fermé
                                </div>
                        }
                    </div>
                </div>
                <p className="text-[.63rem] text-[#292929]"> {description}</p>
                <p className="text-right mt-2">{price}</p>
            </div>
        </div>
    );
}