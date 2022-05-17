import React from 'react'

const Contact = () => {
  return (
    <div className='page'>
    <h1 className='heading'>
      Contacto
    </h1>
    <form className='contact' action='mailto:correo@s.com'>
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Apellido"/>
      <input type="text" placeholder="E-mail"/>
      <textarea placeholder="Motivo de tu mensaje"/>
      <input type="submit" placeholder="Enviar"/>
    </form>
  </div>
  )
}

export default Contact