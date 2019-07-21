import React from 'react';
import Cita from './Cita';

const ListaCitas = ({citas, eliminarCita}) => {
    const titulo = Object.keys(citas).length === 0 ? 'No hay Citas Registradas':' Administrar Listado de Citas'
    return ( 
       <div className="card mt-2 py-5">
           <div className="card-body">
               <h2 className="card-title text-center">
                  {titulo}
               </h2>
               <div className="lista-citas">
                    {citas.map(cita =>{
                      return( <Cita 
                                key= {cita.id}
                                cita = {cita}
                                eliminarCita = {eliminarCita}
                        />)
                     })
                   }
               </div>
           </div>
       </div>
     )
}
 
export default ListaCitas;