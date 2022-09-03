
const Login =()=>{
    return(
        <div>
        <h1>Login</h1>        
        <form>
            <input type="text" name="usuario" value="" placeholder="Ingresa tu nombre"/>
            <input type="text" name="contraseña" placeholder="Ingresa tu contraseña"/>
            <button type="submit">Ingresa</button>
        </form>
        <section>
            <h1>Este es otro elemento</h1>
        </section>
            
        </div>
    )
}
/* exportamos la funcion */
export default Login;