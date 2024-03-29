// Generate QR for url
"use client";
// import { useQRCode } from 'next-qrcode';
import { SetStateAction, useEffect, useState } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import { CanvasUrl, FileUpload } from '@/components';
import * as Yup from 'yup'

const UrlPage = () => {
    const [url, setUrl] = useState<string>("https://www.google.com");
    // 
    const image: any = '/assets/logo-80x80.png'

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
                {({ isValid, dirty, handleChange, values }) => ( // To enter special values that are not directly used 
                    <Form className='flex flex-col text-slate-950'>
                        <p className='text-red'>{values.formUrl}</p>
                        <div className='flex flex-col m-5'>
                            <h1>URL QR-code Generate</h1>
                            <CanvasUrl data={url} setData={values.formUrl} images={image} />
                        </div>
                        <label htmlFor="formUrl">URL Address</label>
                        <Field
                            id="formUrl"
                            name="formUrl"
                            type='text'
                            onChange={handleChange}
                            placeholder="URL"
                        />
                        <FileUpload />
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
