import React from 'react'
import { useFormik } from 'formik'

export const AddBook = () => {


  const validForm = (form) => {
    alert("El formulario se ha generado correctamente.")
    alert(`El nuevo libro validado por el fomulario es: ${JSON.stringify(form)}`)
  }
 

  const validate = (values) => {
      const errors = {}

      if (!values.titulo)
        errors.titulo = "El campo es obligatorio";
      else if (values.titulo.length < 5)
        errors.titulo = "El titulo es muy corto";

      if (!values.autor)
        errors.autor = "El campo es obligatorio";
      else if (values.autor.length < 5)
        errors.autor = "El campo de autor es muy corto";

      if (!values.genero)
        errors.genero = "El campo es obligatorio";
      else if (values.autor.length < 5)
        errors.genero = "El campo de genero es muy corto";

      if (!values.fecha_public)
        errors.fecha_public = "El campo es obligatorio";

      return errors

  }


  const formik = useFormik({
    initialValues: {
      titulo: '',
      autor: '',
      genero: '',
      fecha_public: ''
    },

    validate,
   
    onSubmit: values => validForm(values)
  })


  return (
    <form onSubmit={formik.handleSubmit}>

      <label>Titulo</label>
      <input type="text" {...formik.getFieldProps('titulo')}/>
      {formik.touched.titulo && formik.errors.titulo ? <div> {formik.errors.titulo}</div> : null}


      <br />

      <label>Autor</label>
      <input type="text" {...formik.getFieldProps('autor')}/>
      {formik.touched.autor && formik.errors.autor ? <div> {formik.errors.autor}</div> : null}

      <br />

      <label>Genero</label>
      <input type="text" {...formik.getFieldProps('genero')}/>
      {formik.touched.genero && formik.errors.genero ? <div> {formik.errors.genero}</div> : null}

      <br />

      <label>Fecha Publicación</label>
      <input type="date" {...formik.getFieldProps('fecha_public')}/>
      {formik.touched.fecha_public && formik.errors.fecha_public ? <div> {formik.errors.fecha_public}</div> : null}


      <br /> 

      <input type="submit" value="enviar"/>

    </form>
  )
}
