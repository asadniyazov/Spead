import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
function Add() {
  return (
   <>
    <Formik
       initialValues={{ name: '', price: '', des: '' }}
       validationSchema={Yup.object({
         name: Yup.string(),
         price: Yup.number(),
         des: Yup.string(),
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/news",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
       }}
     >
       <Form>
         <label htmlFor="name"> name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 <br></br>
         <label htmlFor="price">Last Name</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 <br></br>
         <label htmlFor="des">description</label>
         <Field name="des" type="text" />
         <ErrorMessage name="des" />
 <br></br>
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default Add