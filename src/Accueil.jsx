import { MyTextInput, Tabs } from "./helpers";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function ProductForm() {
    const tabs = [
        {
          label: 'Produits',
          content: <p className="text-gray-500">This is the <em className="font-semibold text-gray-800">first</em> item's tab body.</p>,
        },
        {
          label: 'Menus',
          content: <p className="text-gray-500">This is the <em className="font-semibold text-gray-800">second</em> item's tab body.</p>,
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