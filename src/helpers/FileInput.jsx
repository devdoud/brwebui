import React, { useState } from 'react';
import { useField } from 'formik';

export function FileInput ({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;
    const [preview, setPreview] = useState(null);

    const handleChange = (event) => {
        const file = event.currentTarget.files[0];
        setValue(file); // Update Formik state with the selected file

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Set the preview URL
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const handleRemove = () => {
        setValue(null);
        setPreview(null);
    };

    return (
        <div className='mb-4'>
            <label htmlFor={props.id || props.name} className="font-semibold text-sm text-[#292929]" >{label}</label>
            <input 
                type="file" 
                {...props} 
                onChange={handleChange} 
                className="p-2 w-full border text-xs border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700 mb-1"
            />
            {preview && (
                <div>
                    <img src={preview} alt="Preview" className='px-4 py-4 w-1/5 h-1/5 bg-transparent border rounded-lg' />
                    <button type="button" onClick={handleRemove} className="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded-lg">Supprimer</button>
                </div>
            )}
            {meta.touched && meta.error ? (
                ( <div className="text-xs text-red-500">{meta.error}</div> )
            ) : null}
        </div>
    );
};