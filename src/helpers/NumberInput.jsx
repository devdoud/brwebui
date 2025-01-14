import { useField } from "formik";

export function NumberInput({ label, ...props }) {
    const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}