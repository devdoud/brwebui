import { Formik, Form } from "formik";
import { MyTextInput } from "../helpers/MyTextInput";
import * as Yup from "yup";
import { comment } from "postcss";

export function ProductForm() {

    return (
        <div className="flex flex-col">
            <h1 className="text-center my-4 font-bold">Informations Produits</h1>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(5, "trop petit")
                        .max(30, "trop grand")
                        .required("Ce champ est obligatoire"),
                    description: Yup.string()
                        .min(2, "trop petit")
                        .max(10, "trop long!")
                        .required("Ce champ est obligatoire"),
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
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

                    <button type="submit" className="px-3 py-2 bg-black border rounded-lg w-1/3 text-white text-sm font-semibold mt-4">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}