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
        <div className="grid grid-cols-12 h-full sm:mt-8 mt-14">
            <div className="grid col-span-8 col-start-3 h-screen">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}