// Generate QR for url
"use client";
// import { useQRCode } from 'next-qrcode';
import { SetStateAction, useEffect, useState } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import { CanvasUrl } from '@/components';


const UrlPage = () => {
    const [url, setUrl] = useState<string>("https://www.google.com");
    // 
    const image: any = '/assets/logo-80x80.png'

    return (
        <section className='flex justify-center gap-x-8 mt-6'>
            {/* <div className='flex flex-col m-5'>
                <h1>URL QR-code Generate</h1>
                <CanvasUrl data={url} setData={setUrl} images={image} />
            </div> */}

            <Formik
                initialValues={{ formUrl: '', }}
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
                        <label htmlFor="formUrl">URL Address

                        </label>
                        <Field
                            id="formUrl"
                            name="formUrl"
                            type='text'
                            onChange={handleChange}
                            placeholder="URL"
                        />
                        <button type="submit" disabled={!isValid || !dirty} >Submit</button>
                    </Form>
                )}
            </Formik>
        </section>

    );
}

export default UrlPage
