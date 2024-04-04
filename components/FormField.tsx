import { FieldProps } from 'formik'
import React, { ChangeEvent, FC, useRef } from 'react'


// Type of Field Text Password
const InputField: FC<FieldProps<any> & {}> = ({ field, form, ...props }) => {
    return (
        <input {...field} {...props} />
    );
};
// Type of Field Upload Image || Video
const UploadField: FC<FieldProps<any> & {}> = ({ field, form, ...props }) => {
    // TypeScript useRef <HTMLInputElement | null> in this way he understand the it can be null


    return (
        <div>
            <input
                className='hidden'
                id="files"
                name="files"
                type='file'
                onChange={(e) => {
                    // setFieldValue('')
                }}
                {...props}
            />
            {/* fileRef.current?.click() We use a sign? Because the value at the beginning is null
            <button onClick={() => { fileRef.current?.click() }}>
                {field.name}<MdFileUpload />
            </button> */}
        </div>

    );
};


export { UploadField, InputField }


/**********************
 * === Notes ===
 * input Filed
 * Upload Filed
 * 
 * 
 * 
 * 
 **********************/