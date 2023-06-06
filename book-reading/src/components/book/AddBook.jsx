import React, { useState } from 'react'
import { useFormik } from 'formik'

export const AddBook = () => {


  const validForm = (form) => {

    console.log("El formulario se ha validado correctamente")
    console.log(form)

    setformComplete(true);

  }

  const [formComplete, setformComplete] = useState(false)
 

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
      else if (values.genero.length < 5)
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

    

    <div className='container mx-auto'>

      <h1 className="bg-blue-500 text-white p-3">Agregar libro: </h1>


      <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <h1 className='p-4 text-gray-700 text-sm font-bold mb-2 text-center-'>Validación de formulario</h1>
        <div className="mb-4">
          <label htmlFor='titulo' className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <input {...formik.getFieldProps('titulo')} id="titulo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Ingresa el nombre del libro"/>

          {formik.touched.titulo && formik.errors.titulo ? <p className="text-red-500 text-xs italic"> {formik.errors.titulo}</p> : null}
        </div>
        <div className="mb-6">
          <label htmlFor='genero' className="block text-gray-700 text-sm font-bold mb-2" >Género del libro</label>
          <input {...formik.getFieldProps('genero')} id="genero" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingresa el género de libro"/>
          {formik.touched.genero && formik.errors.genero ? <p className="text-red-500 text-xs italic"> {formik.errors.genero}</p> : null}

        </div>
        <div className="mb-6">
          <label htmlFor='autor' className="block text-gray-700 text-sm font-bold mb-2" >Autor</label>
          <input {...formik.getFieldProps('autor')} id='autor' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Ingresa el nombre del autor"/>
          {formik.touched.autor && formik.errors.autor ? <p className="text-red-500 text-xs italic"> {formik.errors.autor}</p> : null}

        </div>
        <div className="mb-6">
          <label htmlFor='fecha' className="block text-gray-700 text-sm font-bold mb-2" >Fecha de publicación</label>
          <input {...formik.getFieldProps('fecha_public')} id='fecha' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="date"/>

          {formik.touched.fecha_public && formik.errors.fecha_public ? <p className="text-red-500 text-xs italic"> {formik.errors.fecha_public}</p> : null}
        </div>



        <div className="flex items-center justify-between">
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enviar"/>
        </div>
      </form>

      {
        formComplete
        &&
        <div className="bg-green-100 border  text-green-700 px-4 py-3 rounded relative" >
          <strong className="font-bold">Formulario validado correctamente</strong>
          <br/>
        </div>

      }
 
    </div>

  )
}
