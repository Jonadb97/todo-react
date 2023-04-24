import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {

    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    console.log(tareaNueva)
    props.onSubmit(tareaNueva);
  }

  return(
    <form className='tarea-formulario'
    onSubmit={manejarEnvio} >
      <input type="text"
      className='tarea-input'
      placeholder='Escribe una Tarea'
      name='texto'
      onChange={manejarCambio} />
      <button className='tarea-boton' 
       >Agregar Tarea <AiOutlinePlus /></button>
    </form>
  );
}

export default TareaFormulario;