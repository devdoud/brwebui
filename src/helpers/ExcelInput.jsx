import React from 'react';
import { useField } from 'formik';
import * as XLSX from 'xlsx';


export function ExcelInput({ label, setFieldValue,  ...props }) {
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;

    const handleChange = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                setValue(json);
                setFieldValue('isExcelUpload', "true"); // Set isExelUploaded to true
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div className="mb-4">
            <label htmlFor={props.id || props.name} className="font-semibold text-sm text-[#292929]">{label}</label>
            <input 
                type="file" 
                accept=".xlsx, .xls" 
                {...props} 
                onChange={handleChange} 
                className="p-2 w-full border text-xs border-solid border-[#FFC146] rounded-lg bg-gray-100 appearance-none text-gray-700 mb-1"
            />
            {meta.touched && meta.error ? (
                <div className="text-xs text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};