
export function Header() {
    return (
        <div className="bg-[#FFC146] p-8 flex justify-between items-center shadow-md h-16">
            <img src="src\assets\images\react.svg" alt="React Logo" />
            <ul className='flex'>
                <li className="mr-3">Products</li>
                <li className="mr-3">Menus</li>
                <li className="mr-3">setting</li>
            </ul>
        </div>
    );
}