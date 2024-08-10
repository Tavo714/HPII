// rsc

import React, { useEffect, useState } from 'react';
import TableClientes from './TableClientes';

const ListarClientes = () => {

    const[lista,setLista]= useState([]);

    const traerClientes=async()=>{
        const ruta = await fetch("https://localhost:7141/api/NeptunoAPI/GetClientes");
        const datos= await ruta.json();
        setLista(datos);
    }

    useEffect(
        ()=>{
            traerClientes();
        },[]
    )
        
    

    return (

        <div className='container'>
            <TableClientes titulo="Lista de Clientes - Neptuno2023"
                           data={lista}/>
        </div>
    );
};

export default ListarClientes;