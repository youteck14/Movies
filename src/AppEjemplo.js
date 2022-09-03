import { useState } from "react";
//useState maneja el estado de la variable

//el primer paso para definir nuestro cmomponente es el NOMBRE
//El nombre debe Inicializar con MAYUSCULA
//ahora el componente es basicamente una funcion por ende
//podemos crearlo usansi
//arrow function o funcion declarativa

const PrimerComponente =()=>{
    //los componente siempre empiezan con mayuscula
    //react tiene una funtion interna llamada useState
    //es una funcion que se encarga de manejar el estado de una variable
    //para poder usar esa funcion tengo que importarla
    //

    /* const prueba = 90; */

    const [count,setCount] = useState(0)//hook manejamos el estado desde 0
    //contenedor se llamara count
    //dentro de este contenedor tendremos algo que modifique
    //funcion setCount contara
    const sumar =()=>{
        setCount(count +1);
    }

    const restar=()=>{
        setCount(count-1);
    }

    const parametros = (a,b)=>{
        setCount(a+b);
    }

    return(
        <div>
            {/* podemos llamar a la variable mediante llaves */}
            <h1>ESTE ES MI COMPONENTE {count}</h1>
            <h2>Holla desde componente</h2>
            <button onClick={sumar} >sumar</button>
            <button onClick={restar} >restar</button>
            <button onClick={()=>parametros (10,20)}>calcular</button>
            
        </div>
    )
}

export default PrimerComponente;