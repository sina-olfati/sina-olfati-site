import React from 'react'
import './EmailMe.css'

// Formik
import { useFormik } from 'formik'



interface MyValues {
    name: string,
    message: string
}

const EmailMe = () => {

    const formik: MyValues = useFormik({
        initialValues: {
            name: '',
            message: ''
        }
    });




  return (
    <div className='emailme-container'>
      <form onSubmit={formik.handleSubmit}>
        <h1>Email ME</h1>
        <div></div>
      </form>
    </div>
  )
}

export default EmailMe
