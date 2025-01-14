import { useField } from "formik";

export function MyTextInput({ label, ...props }) {

    const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="text-2xl font-bold text-red-500">{label}</label>
      <input 
        {...props} {...field} 
        className="py-2.5 px-2 border-2 border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700" 
      />
       
      {meta.touched && meta.error ? ( <div>{meta.error}</div> ) : null}
    </>
  );
};