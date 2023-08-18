import React, {useRef, useEffect, useState} from 'react'

import './EmailMe.css'
import emailjs from '@emailjs/browser';

// Material Ui
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

// icons
import SendIcon from '@mui/icons-material/Send';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

// i18next
import { useTranslation } from "react-i18next";

// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'



const EmailMe = () => {
  
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"))
  // const isEn = bodyDir == "ltr" ? true : false
  
  const { t } = useTranslation()
  
  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, [localStorage.getItem("i18nextLng")])
  
  
  const validationSchema = yup.object ({
    name: yup.string().required(t("contact-emailme-name-error")),
    email: yup.string().required(t("contact-emailme-email-error1")).email(t("contact-emailme-email-error2")),
    message: yup.string().required(t("contact-emailme-message-error")),
  })


  const form = useRef();
  
  const sendEmail = () => {
  //  e.preventDefault();
      emailjs.sendForm('service_1jol4lo', 'template_bagds8g', form.current, 'PIRU_fk_yIzMO3omj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(form)
  }

  return (
    <div className='emailme-container' lang={language}>
      <h1>{t("contact-emailme-emailme")}</h1>
      <Formik
       initialValues={{ name: '', message: '', email: '' }}
       onSubmit={(values, onSubmitProps) => { 
        sendEmail()
        onSubmitProps.resetForm()
      }}
       validationSchema={validationSchema}
      >
        <Form ref={form} className='form-tag' action="https://formsubmit.co/sinaolfati6@gmail.com" method="POST">
          <div className='field-container'>
            <Field placeholder={t("contact-emailme-name-placeholder")} type='text' name='name'/> 
            <ErrorMessage name="name" />
          </div>
          <div className='field-container'>
            <Field placeholder={t("contact-emailme-email-placeholder")} name="email"/> 
            <ErrorMessage name='email' />
          </div>
          <div className='field-container'>
            <Field placeholder={t("contact-emailme-message-placeholder")} name="message" as='textarea'/>
            <ErrorMessage name='message'/>
          </div>

          <div className="send-button">
              <span className="micro-transition">
                <MarkEmailReadIcon />
                <SendIcon />
              </span>
              {/* <Button type='submit'>{t("contact-emailme-send")}</Button> */}
              <Button type='submit'>Send</Button>
          </div>

        </Form>
      </Formik>
    </div>
  )
}

export default EmailMe
