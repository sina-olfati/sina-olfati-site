import * as React from 'react'
import './EmailMe.css'

// Material Ui
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'

const validationSchema = yup.object ({
  name: yup.string().required('Please enter your name'),
  message: yup.string().required('Please write a message'),
})


const EmailMe = () => {

    //     initialValues<MyValues>: {
    //         name: '',
    //         message: ''
    //     }




  return (
    <div className='emailme-container'>
      <h1>Email Me</h1>
      <Formik
       initialValues={{ name: '', message: '' }}
       onSubmit={(values) => { console.log(values) }}
       validationSchema={validationSchema}
      >
        <Form className='form-tag'>
          <div className='field-container'>
            <Field placeholder='name' name='name' /> 
            <ErrorMessage name='name' />
          </div>
          <div className='field-container'>
            <Field placeholder="message" name='message' as='textarea'/>
            <ErrorMessage name='message'/>
          </div>
          <Button type='submit'>SEND</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default EmailMe
