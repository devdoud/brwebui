import { Header, Top, MenuList } from "../components";


export function MenuPage() {
    return (
        <div>
            <Top />
            <div className="absolute top-0 right-0 bg-transparent w-full">
                <Header />
                <MenuList />
            </div>
        </div>
    );
}