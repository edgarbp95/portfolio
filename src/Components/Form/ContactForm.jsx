import React from 'react'
import Input from './Input'
import Swal from 'sweetalert2'

const ContactForm = () => {
  const handleSubmit = (e)=>{
    try { 
      Swal.fire({
        title: 'Correo enviado',
        icon: 'success',
       
        showConfirmButton: false,
        timer:1500,
        timerProgressBar:true,
        color:"#302b63"
        
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text:"No se ha podido enviar el mail.",
        showConfirmButton: false,
        timer:1500,
        timerProgressBar:true,
        color:"#302b63"
      })
    }
  }

  return (
    <div id="contact" className='w-2/4 mx-auto py-20 sm:py-0 sm:pt-10 sm:pb-4 sm:w-5/6 '>
      <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4' action="https://formsubmit.co/edgarbp95@hotmail.com" method="POST">
          <h2 className='text-5xl font-medium text-center text-customIndigo sm:text-3xl sm:font-bold pb-10 sm:pb-2'>Contactame</h2>
          <div className='flex gap-2'>
            <Input type="text" name="nombre" text="Nombre"/>
            <Input type="text" name="asunto" text="Asunto"/>
          </div>
            <Input type="email" name="email" text="Correo" required="true"/>
            <textarea className='focus:ring-0 focus:outline-none border-gray-400 focus:border-yellow-500 text-sm h-28 text-gray-600' name="mensaje" id="mensaje" cols="320" rows="10" placeholder='Escribe tu mensaje... Gracias!'></textarea>
            <button className='sm:w-16 w-36 inline-flex items-center justify-center h-10 text-sm font-medium text-center text-white rounded-lg hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-indigo-300 bg-customIndigo ' type="submit">Enviar</button>
            <input type="hidden" name="_next" value="http://127.0.0.1:5174/"/>
            <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
   
  )
}

export default ContactForm
