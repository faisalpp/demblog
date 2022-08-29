import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { submitComment } from '../services';

const initialValues = {name: '',email:'',comment:''}
 
 const onSubmit = values => {
  values['slug'] = slug;
  submitComment(values)
 }

 const validationSchema = Yup.object ({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  comment: Yup.string().required('Required')
})

const CommentsForm = ({slug}) => {
  return (
    <div>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <Form className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h1 className='text-xl mb-8 font-semibold border-b pb-4' >Leave a Reply</h1>
      <div className='grid grid-col-1 gap-4 mb-4'>
        <Field className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder='Comment' name='comment' />
        <ErrorMessage name='comment'/>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-2 gap-4 mb-4'>
        <Field type="text" className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder='Name' name='name'/>
        <Field type="text"  className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder='Email' name='email'/>
        <ErrorMessage name='name'/><ErrorMessage name='email'/>
      </div>
      <div className='mt-8'>
       <button type='submit'  className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white  px-8 py-3 cursor-pointer'>
        Post Comment
       </button>
      </div>
    </Form>
    </Formik>
    </div>
  )
}

export default CommentsForm