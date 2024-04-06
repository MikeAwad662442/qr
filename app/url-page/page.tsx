// Generate QR for url
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
// to use Yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
// to use Yup
import { MdFileUpload } from "react-icons/md";
import { useRef } from 'react';
// Components
import { CanvasUrl } from '@/components';

// ====================== //
// ====================== //
// Default Setting insert
interface UrlInput {
    url: string,
    image?: File
}

const schema = Yup.object({
    // the right way to check URL
    url: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),
    image: Yup.object().required('Image Is required'),
})


// Default Setting insert
// ====================== //
// ====================== //

const UrlPage = () => {
    const url = "https://www.google.com";
    const image: any = '/assets/logo-80x80.png';
    const fileRef = useRef<HTMLInputElement>(null)
    const focusInput = () => {
        fileRef.current?.focus();
    };
    /* ********************** */
    // React Hook Form Configuration
    const { register, handleSubmit, formState, control, watch } = useForm<UrlInput>({
        // defaultValues: {    // Forms Values
        //     url: '',
        //     image:
        // },
        resolver: yupResolver<UrlInput>(schema)   // check ERRORS
    });
    const { errors } = formState;   // to get ERRORS from ReactHookForm
    const onSubmit: SubmitHandler<UrlInput> = (data) => console.log('The insert Data :', data);
    // React Hook Form Configuration
    // const WatchData: UrlInput = watch()

    return (
        <section className='flex justify-center flex-col gap-y-8 mt-6'>
            {/* View VALUES INPUT */}
            <p className='text-red'></p>
            {/* <div className='flex flex-col m-5'>
                <h1>URL QR-code Generate</h1>
                <CanvasUrl data={url} setData={''} images={image} />
            </div> */}
            {/* View VALUES INPUT */}
            {/* <h2>Watched Value: {JSON.stringify(WatchData)}</h2> */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="FormControl">
                    <label htmlFor="url">Url</label>
                    <input
                        type="text"
                        id="url"
                        placeholder={`your Link ${url}`}
                        className="Input"
                        {...register("url")} />
                    <p>{errors.url?.message}</p>
                </div>
                <div className="FormControl">
                    <label htmlFor="image">image</label>
                    <input
                        type="file"
                        id="image"
                        placeholder={`add you Logo`}
                        // className="file-input"
                        {...register("image")}
                    />
                    {/* <p>{errors.image?.message}</p> */}
                    <button className="text-2xl text-orange-500" onClick={focusInput} ><MdFileUpload /></button>
                </div>
                {/* <button type="submit">Submit</button> */}
                <button type="submit">Submit</button>
            </form>

        </section>
    );
}

export default UrlPage

/**
 * Notes
 * const { 
 *      register => to observe the input,
 *      handleSubmit => to Handle Submit Value,
 *      formState => to control errors
 *   } = useForm<UrlInput>({
        resolver: yupResolver(schema)   => to insert yup control errors
    });
 * 
 *     // the right way to check URL
    url: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),
 * 
 */