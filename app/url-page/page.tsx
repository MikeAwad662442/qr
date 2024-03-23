// Generate QR for url
"use client";
import { useQRCode } from 'next-qrcode';
import { useState } from 'react';
import { useFormik } from 'formik';
const UrlPage = () => {
    // 
    const [url, setUrl] = useState("https://www.google.com");

    // 
    const formik = useFormik({
        initialValues: {
            formUrl: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    // 
    const { Canvas } = useQRCode();
    //  setUrl = formik.values.formUrl
    return (
        <section className='flex justify-center mt-6'>
            <div className='flex flex-col m-5'>
                <h1>URL QR-code Generate</h1>
                <Canvas
                    text={url}
                    options={{
                        errorCorrectionLevel: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                            dark: 'red',
                            light: '#fff',
                        },
                    }}
                />
            </div>
            <div>
                <form onSubmit={formik.handleSubmit} className='flex flex-col'>
                    <label htmlFor="formUrl">URL Address</label>
                    <input className='text-slate-950'
                        id="formUrl"
                        name="formUrl"
                        type="formUrl"
                        onChange={formik.handleChange}
                        value={formik.values.formUrl}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>

    );
}

export default UrlPage
