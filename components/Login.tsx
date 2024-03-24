"use client";
import { UserType } from '@/types';
import { useFormik } from 'formik';


const Login = () => {
    const formik = useFormik<UserType>({
        initialValues: {
            userName: '',
            password: ''
        },
        validate: (values: UserType) => {
            let errors: any = {} // I try to use UserType as interface but it not work, i well to try to fixed later
            if (!values.userName) {
                errors.userName = 'Required'
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            return errors
        },
        onSubmit: (values) => {
            console.log('Format Data', values)
        },

    });
    console.log('Formaik values', formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col bg-slate-500 gap-y-5 text-slate-950'>
                <label htmlFor='userName'>User Name</label>
                <input
                    type='text'
                    id='userName'
                    name='userName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                ></input>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                ></input>
                <button type='submit' className='bg-slate-50'>submit</button>
            </form>
        </div>
    )
}

export default Login


/**
 ***********************
 * Notes
 ***********************
 * tailwind CSS
 * ===========
 * 
 ***********************
 *  Formik 
 * ===========
 * useFormik<UserType>({
        initialValues: {    // insert initial Values to the Form
                            // and it is Object {}
            userName: import type from interface TypeScript
            password: import type from interface TypeScript
        },
        onSubmit: (values) => { // it is Function () => {}
            To submit the values to API
        },
 ***********************
        <input ...
            // to help us to track the input field
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}  // check if the input field has been Visited and it well bey send formik.touched
            value={formik.values.userName}
        ></input>
 **/