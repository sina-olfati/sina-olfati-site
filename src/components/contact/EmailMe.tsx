import React, {useRef} from 'react'
import './EmailMe.css'
import emailjs from '@emailjs/browser';

// Material Ui
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'

const validationSchema = yup.object ({
  name: yup.string().required('Please enter your name'),
  message: yup.string().required('Please write a message'),
  email: yup.string().required('Please enter your email').email('Email format is not correct'),
})




const EmailMe = () => {
  const form = useRef();
  
  const sendEmail = (e: any) => {
  //  e.preventDefault();
  
      emailjs.sendForm('service_1jol4lo', 'template_bagds8g', form.current, 'PIRU_fk_yIzMO3omj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }

  return (
    <div className='emailme-container'>
      <h1>Email Me</h1>
      <Formik
       initialValues={{ name: '', message: '', email: '' }}
       onSubmit={() => { 
        sendEmail('')
      }}
       validationSchema={validationSchema}
      >
        <Form ref={form} className='form-tag' action="https://formsubmit.co/sinaolfati6@gmail.com" method="POST">
          <div className='field-container'>
            <Field placeholder='name' type='text' name='name' required/> 
            <ErrorMessage name="name" />
          </div>
          <div className='field-container'>
            <Field placeholder='email' name="email" required/> 
            <ErrorMessage name='email' />
          </div>
          <div className='field-container'>
            <Field placeholder="message" name="message" as='textarea'/>
            <ErrorMessage name='message'/>
          </div>
          <Button type='submit'>SEND</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default EmailMe
