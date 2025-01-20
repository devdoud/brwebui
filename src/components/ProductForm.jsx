import { Formik, Form } from "formik";
import { MyTextInput, SelectInput, FileInput } from "../helpers";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import * as Yup from "yup";

export function ProductForm() {
    const [excelData, setExcelData] = useState([]);
    const [isExelUploaded, setIsExcelUploaded] = useState(false);
    
    let navigate = useNavigate();
    
    // Validation Schemma conditionel 
    const validationSchema = Yup.object({
        name: Yup.string().when("isExelUploaded", {
            is: true,
            then: Yup.string().notRequired(),
            otherwise: Yup.string()
            .min(5, "trop petit")
            .max(1000, "trop grand")
            .required("Ce champ est obligatoire"),         
        }),
        description: Yup.string().when("isExelUploaded", {
            is: true,
            then: Yup.string().notRequired(),
            otherwise: Yup.string()
            .min(5, "trop petit")
            .max(1500, "trop grand")
            .required("Ce champ est obligatoire"),         
        }),
        price: Yup.number().when("isExelUploaded", {
            is: true,
            then: Yup.number().notRequired(),
            otherwise: Yup.number()
            .typeError("Le prix doit etre un nombre")
            .positive("Entrez un nombre positif")
            .required("Ce champ est obligatoire"),         
        }),
        menu: Yup.string().when("isExelUploaded", {
            is: true,
            then: Yup.string().notRequired(),
            otherwise: Yup.string()
            .required("Ce champ est obligatoire"),         
        }),
        image: Yup.mixed().when("isExelUploaded", {
            is: true,
            then: Yup.string().notRequired(),
            otherwise: Yup.mixed()
            .required("Ce champ est obligatoire"),         
        })
    }); 

    // handle excel file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const binaryStr = e.target.result;
                const workBook = XLSX.read(binaryStr, { type: "binary" });
                const workSheetName = workBook.SheetNames[0];
                const workSheet = workBook.Sheets[workSheetName];
                const data = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
                setExcelData(data);
                setIsExcelUploaded(true);
            }
            reader.readAsBinaryString(file);
            
        }
    }

    // handle form submission 
    const handleSubmit = async (values, { setSubmitting, setFieldValue }) => {
        setSubmitting(true); // Disable the submit button
        
        try {
            if(values.isExelUploaded) {
                // Transform Excel file
                const transformedData = excelData.map((row) => (
                    {
                        name: row["nom"],
                        description: row["description"],
                        price: row["prix"],
                        menu: row["menu"],
                        image: row["image"],
                    }
                ));
                console.log("Donnee transforme du fichier Excel : ",transformedData);

                // Send the transformed data to the server
                await axios.post("/api/products/bulk", transformedData);
                alert("Données importées avec succès");
                navigate("/products");

                // Reset the form
                setExcelData([]);
                setIsExcelUploaded(false);

            } else {
                // prepare the individual form data
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("description", values.description);
                formData.append("price", values.price);
                formData.append("menu", values.menu);
                formData.append("image", values.image);
                
                console.log("Données du formulaire individuel : ",formData);

                // Send the individual form data to the server
                await axios.post("/api/products", formData);
                alert("Produit ajoute avec succes !");

                // Reset the form
                setFieldValue("name", "");
                setFieldValue("description", "");
                setFieldValue("price", "");
                setFieldValue("menu", "");
                setFieldValue("image", null);
            }  
        } catch (error) {
            console.log("Erreur lors de l'ajout des produits : ", error);
            alert("Erreur lors de l'ajout des produits");
        } finally {
            setSubmitting(false); // Enable the submit button
        }
    };
    
    return (
        <div className="flex flex-col">
            <h1 className="text-center my-4 font-bold text-2xl text-[#292929]">Informations Produits</h1>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    price: "",
                    menu: "",
                    image: null,
                    isExelUploaded: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
               {({ isSubmitting, setFieldValue, values }) => (
                    <Form className="flex flex-col mb-4">

                        {!values.isExelUploaded && (
                            <>
                                <MyTextInput
                                    label="Name"
                                    name="name"
                                    type="text"
                                    placeholder="Entrez le nom du produit"
                                    required={true}
                                />
                                <MyTextInput
                                    label="Description"
                                    name="description"
                                    type="text"
                                    placeholder="Entrez la description du produit"
                                    required={true}
                                />
                                <MyTextInput
                                    label="Price"
                                    name="price"
                                    type="number"
                                    placeholder="Entrez le prix du produit"
                                    required={true}
                                />

                                <SelectInput label="Menu" name="menu">
                                    <option value="">Selectionner un menu</option>
                                    <option value="burguer">Burguer</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="pasta">Pasta</option>
                                    <option value="salad">Salad</option>
                                    <option value="autrer">Autres</option>
                                </SelectInput>

                                <FileInput
                                    label="Image"
                                    name="image"
                                    accept="image/*"
                                />
                            
                            </>
                        )}

                        {values.isExelUploaded && (
                            <>
                                <input
                                    name="excelFile"
                                    type="file"
                                    accept=".xlsx, .xls"
                                    onChange={handleFileUpload}
                                    className="p-2 w-full border text-xs border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700 mb-4"
                                />
                            </>
                        )}

                        <div className="flex gap-1 mb-4">
                            <input 
                                type="checkbox" 
                                onChange={(e) => setFieldValue('isExelUploaded', e.target.checked)}
                                className="w-4 h-4 rounded border-[#292929] bg-[#FFC146] checked:bg-[#FFC146] checked:border-[#292929] focus:outline-none"
                            />
                            <label className="font-semibold text-sm text-[#292929]" > 
                                Importer un fichier Excel
                            </label>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="px-3 py-2 bg-[#292929] border rounded-lg w-1/3 text-white text-sm font-semibold mt-4">
                            { isSubmitting ? "En cours..." : "Ajouter" }
                        </button>
                    </Form>
               )}
            </Formik>
        </div>
    );
}