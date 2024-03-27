"use client";
import { UserType } from '@/types';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yap from 'yup'
// add const rules to the component
const initialValues: UserType = {
    userName: '',
    password: ''
}
// 
const onSubmit = (values: UserType) => {
    console.log('Format Data', values)
}
// 
const validationSchema = Yap.object<UserType>({
    userName: Yap.string().required('Required').min(3, 'It must not be less than 3 letters'),
    password: Yap.string().required('Required')

})
// Finish
const Login = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isValid, dirty }) => ( // To enter special values that are not directly used 
                    <Form className='flex flex-col bg-slate-500 gap-y-5 text-slate-950'>
                        <div>
                            <label htmlFor='userName'>User Name</label>
                            <Field
                                type='text'
                                id='userName'
                                name='userName'
                                placeholder='insert your Name'
                            />
                            <ErrorMessage name='userName' />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <Field
                                type='password'
                                id='password'
                                name='password'
                                placeholder="your Password"
                            />
                            <ErrorMessage name='password' />
                        </div>
                        <button type='submit' disabled={!isValid || !dirty} className='bg-slate-50'>submit</button>
                    </Form>
                )}

            </Formik>
        </>
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