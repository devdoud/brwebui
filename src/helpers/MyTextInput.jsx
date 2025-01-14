import { useField } from "formik";

export function MyTextInput({ label, ...props }) {

    const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="font-bold">{label}</label>
      <input 
        {...props} {...field} 
        className="p-2 w-full border text-xs border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700" 
      />
       
      {meta.touched && meta.error ? ( <div>{meta.error}</div> ) : null}
    </>
  );
};