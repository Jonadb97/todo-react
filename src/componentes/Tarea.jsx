import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import '../estilos/Tarea.css';

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
      onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div>
        <BsFillTrashFill className='tarea-icono' 
        onClick={() => eliminarTarea(id)} />
      </div>
    </div>
  );
}

export default Tarea;