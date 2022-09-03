import { useState } from "react";

const FormRegister =()=>{
    const [nombre,setNombre] = useState("")

    const [apellido,setApellido] = useState("")

    const handleInputName = (e)=>{
        //me ayuda a capturar lo que esta en el input
        setNombre(e.target.value)
    }
    
    const handleInputLastName =(e)=>{
        setApellido(e.target.value)
    }

    //en react la forma de capturar el valor de un input
    //es usando el onChange este evento nos va permitir capturar el valor
    //de lo input y lo guardo en una variable "NOMBRE"
    //la palabra que se usa mucho en react es el handle
    return(
        <div>
            <h2>Formulario de Registro</h2>
            <h4>Nombre {nombre}</h4>
            <h4>Apellido {apellido}</h4>
            <form action="">
                <input type="text" placeholder="ingrese nombre" onChange={handleInputName}/>
                <input type="text" placeholder="ingrese apellido" onChange={handleInputLastName}/>
            </form>

        </div>
    )
}

export default FormRegister;