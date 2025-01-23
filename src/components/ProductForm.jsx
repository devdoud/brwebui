
import { Formik, Form } from "formik";
import { MyTextInput, SelectInput, FileInput, ExcelInput } from "../helpers";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

export function ProductForm() {
    const navigate = useNavigate();
    const [isExcelUpload, setIsExcelUpload] = useState(false);

    const individualValidationSchema = Yup.object({
        name: Yup.string()
            .min(5, "trop petit")
            .max(1000, "trop grand")
            .required("Ce champ est obligatoire"),
        description: Yup.string()
            .min(5, "trop petit")
            .max(1500, "trop grand")
            .required("Ce champ est obligatoire"),
        price: Yup.number()
            .typeError("Le prix doit etre un nombre")
            .positive("Entrez un nombre positif")
            .required("Ce champ est obligatoire"),
        menu: Yup.string().required("Ce champ est obligatoire"),
        image: Yup.mixed().required("Ce champ est obligatoire"),
    });

    const excelValidationSchema = Yup.object({
        excelFile: Yup.mixed().required("Ce champ est obligatoire"),
    });

    const handleIndividualSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true); // Disable the submit button

        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('price', values.price);
            formData.append('menu', values.menu);
            formData.append('image', values.image);

            console.log(ok)

            // const response = await fetch('http://localhost:3001/products', {
            //     method: 'POST',
            //     body: formData,
            // });

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            // const result = await response.json();
            // console.log('Success:', result);

            navigate('/products');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleExcelSubmit = async (values, { setSubmitting, setFieldValue }) => {
        setSubmitting(true); // Disable the submit button

        try {
            // Transform Excel file
            const transformedData = values.excelFile.map((row) => ({
                name: row["nom"],
                description: row["description"],
                price: row["prix"],
                menu: row["menu"],
                image: row["image"],
            }));
            console.log("Données transformées du fichier Excel : ", transformedData);

            // Send the transformed data to the server
            await axios.post("/api/products/bulk", transformedData);
            alert("Données importées avec succès");
            navigate("/products");

            setFieldValue('excelFile', null);
            setFieldValue('isExcelUpload', false);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col">
            <h1 className="text-center my-4 font-bold text-2xl text-[#292929]">Informations Produits</h1>
            <div className="flex items-center gap-1 mb-4">
                <input 
                    type="checkbox" 
                    checked={isExcelUpload}
                    onChange={(e) => setIsExcelUpload(e.target.checked)}
                    className="w-4 h-4 rounded focus:outline-none cursor-pointer"
                />
                <label className="font-semibold text-sm text-[#292929]">Importer un fichier Excel</label>
            </div>
            {isExcelUpload ? (
                <Formik
                    initialValues={{ excelFile: null, isExcelUpload: true }}
                    validationSchema={excelValidationSchema}
                    onSubmit={handleExcelSubmit}
                >
                    {({ setFieldValue, isSubmitting }) => (
                        <Form className="flex flex-col mb-4">
                            <ExcelInput
                                label="Upload Excel File"
                                name="excelFile"
                                setFieldValue={setFieldValue}
                            />
                            <button type="submit" disabled={isSubmitting} className="px-3 py-2 bg-[#292929] border rounded-lg w-1/3 text-white text-sm font-semibold mt-4">
                                { isSubmitting ? "En cours..." : "Excel" }
                            </button>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                        price: '',
                        menu: '',
                        image: null,
                    }}
                    validationSchema={individualValidationSchema}
                    onSubmit={handleIndividualSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col mb-4">
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Entrez le nom du produit"
                            />
                            <MyTextInput
                                label="Description"
                                name="description"
                                type="text"
                                placeholder="Entrez la description du produit"
                            />
                            <MyTextInput
                                label="Price"
                                name="price"
                                type="number"
                                placeholder="Entrez le prix du produit"
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
                            <button type="submit" disabled={isSubmitting} className="px-3 py-2 bg-[#292929] border rounded-lg w-1/3 text-white text-sm font-semibold mt-4">
                                { isSubmitting ? "En cours..." : "Ajouter" }
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}