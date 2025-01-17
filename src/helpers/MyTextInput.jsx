import { useField } from "formik";

export function MyTextInput({ label, ...props }) {

    const [field, meta] = useField(props);

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.id || props.name} className="font-semibold text-sm text-[#292929]">
          {label}
          {props.required ? <span className="text-red-500 font-medium ml-1">*</span> : null}
      </label>
      <input 
        {...props} {...field} 
        className="p-2 w-full border text-xs border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700 mb-1" 
      />
       
      {meta.touched && meta.error ? ( <div className="text-xs text-red-500">{meta.error}</div> ) : null}
    </div>
  );
};