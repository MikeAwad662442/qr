import { UserType } from '@/types'
import { useFormik } from 'formik'
import React from 'react'

const Login = () => {
    const formik = useFormik<UserType>({
        initialValues: {
            userName: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('Format Data', values)
        },

    });
    console.log('Formaik values', formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col text-slate-950'>
                <label htmlFor='userName'>User Name</label>
                <input
                    type='text'
                    id='userName'
                    name='userName'
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                ></input>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                ></input>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Login


/**
 ***********************
 * Notes
 ***********************
 *  Formik 
 * ===========
 * useFormik<UserType>({
        initialValues: {    // insert initial Values to the Form
            userName: import type from interface TypeScript
            password: import type from interface TypeScript
        },
 * 
 ***********************
        <input ...
            // to help us to track the input field
            onChange={formik.handleChange}  
            value={formik.values.userName}  
        ></input>
 **/