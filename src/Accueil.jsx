import { MenuForm, ProductForm } from "./components";
import { Tabs } from "./helpers";

export default function Accueil() {
  // <p className="text-gray-500">This is the <em className="font-semibold text-gray-800">second</em> item's tab body.</p>
    const tabs = [
        {
          label: 'Produits',
          content: <ProductForm />,
        },
        {
          label: 'Menus',
          content: <MenuForm />,
        },
        // {
        //   label: 'Tab 3',
        //   content: <p className="text-gray-500">This is the <em className="font-semibold text-gray-800">third</em> item's tab body.</p>,
        // },
      ];
    
    return (
        <div className="grid grid-cols-12 h-full mt-8">
            <div className="grid col-span-8 col-start-3 h-screen">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}