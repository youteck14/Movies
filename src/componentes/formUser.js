import { useState } from "react"
import { TextField } from "@mui/material";




const FormUsuario=()=>{

    const [valorDeinputs,setValorInputs] = useState({
        nombre:"",
        apellido:"",
        correo:"",
        password:""
    });

    const handleInputValues =(e)=>{//event target.value
        //debemos extraer 2 cosas del event
        //2 el value
        //name = e.target.name [name].value
        //value = e.target.value

        const {name,value} =e.target;
        //...valorDeInputs: es para hacer una copia del onjeto acutal y
        //ademas estamos agregando el nuevo kay y value que recibimos
        //[name] recuerden que name es una variable por ende para
        //poder usarlo como key debemos color en []
        //value: el valor que estamos recibiendo de nuestro input

        setValorInputs({
            ...valorDeinputs,
            [name]:value,
        });
    };

    return(
        <div>
            <form action="">
                <h4>Formulario de usuarios</h4>
                <h5>nombre {valorDeinputs.nombre}</h5>
                <h5>apellido {valorDeinputs.apellido}</h5>
                <h5>correo {valorDeinputs.email}</h5>
                <h5>password {valorDeinputs.password}</h5>
                <p>
                    <TextField type="text" name="nombre" placeholder="ingresa tu nombre" onChange={handleInputValues}/>
                </p>
                <p>
                    <TextField type="text" name="apellido" placeholder="ingresa tu apellido" onChange={handleInputValues}/>
                </p>
                <p>
                    <TextField type="email" name="email" placeholder="ingresa tu email" onChange={handleInputValues}/>
                </p>
                <p>
                    <TextField type="password" name="password" placeholder="ingresa tu password" onChange={handleInputValues}/>
                </p>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default FormUsuario;