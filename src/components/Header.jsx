
export function Header() {
    return (
        <div className="bg-[#FFC146] sm:p-8 p-4 flex justify-between items-center shadow-md sm:h-16 w-full">
            <img src="src/assets/images/logo_1.jpg" alt="Logo Benin Restoo" className="sm:w-[42px] w-[26px]" />
            //Voici les differentes rebriques de notre petit site web
            <ul className='sm:flex hidden'>
                <li className="mr-3">Products</li>
                <li className="mr-3">Menus</li>
                <li className="mr-3">setting</li>
            </ul>
        </div>
    );
}