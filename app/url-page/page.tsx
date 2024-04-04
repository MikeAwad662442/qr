// Generate QR for url
"use client";
import { Formik, Form, Field } from 'formik';
import { CanvasUrl } from '@/components';
import * as Yup from 'yup';
import { InputField, UploadField } from '@/components/FormField';
import { MdFileUpload } from "react-icons/md";
import { useRef } from 'react';
const UrlPage = () => {
    const url = "https://www.google.com";
    const image: any = '/assets/logo-80x80.png';
    const fileRef = useRef<HTMLInputElement | null>(null)
    return (
        <section className='flex justify-center gap-x-8 mt-6'>
            <Formik
                initialValues={{
                    formUrl: '',
                    files: ''
                }}
                validationSchema={Yup.object({
                    formUrl: Yup.string().url('this Value is not Link to URL').required('this input value is Required'),
                    file: Yup.mixed()
                })}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ isValid, dirty, setFieldValue, handleChange, values }) => ( // To enter special values that are not directly used 
                    <Form className='flex flex-col bg-red-800 text-slate-250 gap-y-2'>
                        {/* View VALUES INPUT */}
                        <p className='text-red'>{values.formUrl}</p>
                        <div className='flex flex-col m-5'>
                            <h1>URL QR-code Generate</h1>
                            <CanvasUrl data={url} setData={values.formUrl} images={image} />
                        </div>
                        {/* View VALUES INPUT */}
                        {/* start forms filed */}
                        <label htmlFor="formUrl">URL Address</label>
                        <Field
                            id="formUrl"
                            name="formUrl"
                            type='text'
                            onChange={handleChange}
                            placeholder="URL"
                            components={InputField}
                        />
                        <label htmlFor='files'>Upload Images</label>
                        <Field
                            ref={fileRef}
                            id="files"
                            name="files"
                            type='file'
                            onChange={setFieldValue}
                            components={UploadField}
                        />
                        {/* fileRef.current?.click() We use a sign? Because the value at the beginning is null */}
                        <button onClick={() => { fileRef.current?.click() }}>
                            files<MdFileUpload />
                        </button>
                        <button type="submit" disabled={!isValid || !dirty} >Submit</button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

export default UrlPage

/************************
 * to send Data From Formik To QR-code Components
 * =====================
 * First you must but the components inside Form tag as a children
 * in this way we can use  {  handleChange, values } to check any value update and sending to components
 * 
 *           <Formik
                initialValues={{ formUrl: '', }}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ handleChange, values }) => ( // To enter special values that are not directly used 
                    <Form>
                        <CanvasUrl data={url} setData={values.formUrl} images={image} />
                        <label htmlFor="formUrl">URL Address</label>
                        <Field id="formUrl" name="formUrl" type='text' placeholder="QR-code"
                        onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
 * =====================
 * 
 * 
 * 
 ************************/
