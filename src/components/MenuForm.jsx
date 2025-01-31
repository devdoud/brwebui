import { Formik, Form } from "formik";
import { MyTextInput } from "../helpers/MyTextInput";
import * as Yup from "yup";

export function MenuForm() {

    return (
        <div className="flex flex-col">
            <h1 className="text-center my-4 font-bold sm:text-2xl text-xl text-[#292929]">Informations Menu</h1>
            <Formik
                initialValues={{
                    description: "",
                    commentaire: "",
                }}
                validationSchema={Yup.object({
                    description: Yup.string()
                        .min(5, "trop petit")
                        .max(30, "trop grand")
                        .required("Ce champ est obligatoire"),
                    commentaire: Yup.string()
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
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="Entrez la description"
                    />
                    <MyTextInput
                        label="Commentaire"
                        name="commentaire"
                        type="text"
                        placeholder="Entrez votre commentaire"
                    />

                    <button type="submit" className="sm:px-3 px-2 py-2 sm:w-1/6 w-3/5 bg-[#292929] border rounded-lg text-white font-semibold text-sm mt-4">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}