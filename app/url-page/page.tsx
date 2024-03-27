// Generate QR for url
"use client";
// import { useQRCode } from 'next-qrcode';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import { CanvasUrl } from '@/components';




// const fetchNewUrl = async () => {
//     const {
//         values: { formUrl },
//         setFieldValue,
//     } = useFormikContext();
//     // 
//     useEffect(() => {
//         if (formUrl.trim() !== '') {

//         }
//     }), [formUrl,]
//     // 
// }


const UrlPage = () => {
    const [url, setUrl] = useState("https://www.google.com");
    // 
    const image: any = '/assets/logo-80x80.png'
    // 
    // const formik = useFormik({
    //     initialValues: {
    //         formUrl: '',
    //     },
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });
    // 

    //  setUrl = formik.values.formUrl
    return (
        <section className='flex justify-center mt-6'>
            <div className='flex flex-col m-5'>
                <h1>URL QR-code Generate</h1>
                <CanvasUrl data={url} images={image} />
            </div>
            <Formik
                initialValues={{ formUrl: '', }}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}>
                <Form className='flex flex-col'>
                    <label htmlFor="formUrl">URL Address
                        <Field className='text-slate-950'
                            id="formUrl"
                            name="formUrl"
                            type="formUrl"
                        />
                    </label>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </section>

    );
}

export default UrlPage
