import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
 
 const formSchema = Yup.object().shape({
  title: Yup.string().min(2).max(100).required("This field is required"),
  description: Yup.string().min(4).required("This field is required"),
  website_url: Yup.string().nullable().url("This field needs to be a valid url"),
  image_url: Yup.string().nullable().url("This field needs to be a valid url"),
  year_published: Yup.number().positive("Must be a positive number").required("This field is required"),
  available: Yup.number().required("This field is required"),
 });

export const BookForm = ({ formType="Create", book={}}) => {

  const initialValues = { 
    title: "",
    description: "",
    website_url: "",
    image_url: "",
    year_published: "",
    available : ""
  };
  const {id} = useParams();

  useEffect(() => {
    if(formType === "Edit"){

    }
  
  }, [formType])
  

  const handleSubmit = (values,setSubmitting)=>{
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className='container'>
      <h1>{formType} Book</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting })=>handleSubmit(values,setSubmitting)}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <label className='form__label' htmlFor="title">Title</label>
            <Field className="form__field" type="text" name="title" placeholder="Book title"/>
            <ErrorMessage className='form__field--error' name="title" component="div" />

            <label className='form__label' htmlFor="description">Description</label>
            <Field className="form__field" as="textarea" name="description" placeholder="Description"/>
            <ErrorMessage className='form__field--error' name="description" component="div" />

            <label className='form__label' htmlFor="website_url">Website</label>
            <Field className="form__field" type="text" name="website_url" placeholder="Website url"/>
            <ErrorMessage className='form__field--error' name="website_url" component="div" />
            
            <label className='form__label' htmlFor="image_url">Website</label>
            <Field className="form__field" type="text" name="image_url" placeholder="Image url"/>
            <ErrorMessage className='form__field--error' name="image_url" component="div" />

            <label className='form__label' htmlFor="year_published">Year published</label>
            <Field className="form__field" type="number" name="year_published" />
            <ErrorMessage className='form__field--error' name="year_published" component="div" />

            <label className='form__label' htmlFor="available">Available</label>
            <Field className="form__field" as="select" name="available">
              <option value=""></option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </Field>
            <ErrorMessage className='form__field--error' name="available" component="div" />
          
            <button type="submit" disabled={isSubmitting}>
              {formType}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
