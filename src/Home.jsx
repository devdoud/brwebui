import { MenuForm, ProductForm } from "./components";
import { Tabs } from "./helpers";

export default function Home() {
    const tabs = [
        {
          label: 'Produits',
          content: <ProductForm />,
        },
        {
          label: 'Menus',
          content: <MenuForm />,
        },
      ];
    
    return (
        <div className="grid grid-cols-12 h-full sm:my-8 mt-14">
            <div className="grid sm:col-span-8 col-span-10 sm:col-start-3 col-start-2 h-screen p-4">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}