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
        <div className="grid grid-cols-12 h-full mt-8 z-10">
            <div className="grid col-span-8 col-start-3 h-screen">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}