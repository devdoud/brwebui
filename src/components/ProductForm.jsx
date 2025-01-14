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
                    firtname: "",
                    lastname: "",
                    description: "",
                    comment: "",
                }}
                validationSchema={Yup.object({
                    firtname: Yup.string()
                        .max(3, "Must be 15 characters or less")
                        .required("Required"),
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className="flex flex-col space-y-2">
                    <MyTextInput
                        label="FirtName"
                        name="firstName"
                        type="text"
                        placeholder="Entrez votre prenom"
                    />
                    <MyTextInput
                        label="LastName"
                        name="lastName"
                        type="text"
                        placeholder="Entrez votre nom"
                    />
                    <MyTextInput
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="Entrez la description"
                    />
                    <MyTextInput
                        label="Comment"
                        name="comment"
                        type="text"
                        placeholder="Entrez votre commentaire"
                    />
                </Form>
            </Formik>
        </div>
    );
}