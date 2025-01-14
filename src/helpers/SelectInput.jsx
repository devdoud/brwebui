
import { useField } from "formik";

export function SelectInput({ label, ...props }) {
    
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select 
                {...field} 
                {...props} 
                className="p-2 w-full border text-xs border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700 mb-1"
            />
            {meta.touched && meta.error ? (
                <div className="text-xs text-red-500">{meta.error}</div>
            ) : null}
        </>
    );
}