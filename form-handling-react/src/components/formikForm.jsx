import {  Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const handleSubmit = (values) => {
        console.log('Form Data:', values);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-red-500">Registration Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Username:</label>
                        <Field type="text" name="username" className="w-full px-3 py-2 border rounded" />
                        <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <Field type="email" name="email" className="w-full px-3 py-2 border rounded" />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password:</label>
                        <Field type="password" name="password" className="w-full px-3 py-2 border rounded" />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormikForm;