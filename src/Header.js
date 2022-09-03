/* el nombre del archivo siempre en mayuscula */
import './Nav.css';
import logo from './logo.svg';


const Header =()=>{/* en letra mayuscula la funcion */
/* sin return no funciona */
    return(

/* necesito un padre para pode poner mas etiquetas */
    <header className='header'>
        <div className='App-logoreact'>
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className='contenedor md-3 mt-2'>
            <div className='md-5 mt-2'>
                <nav className='hero'>                
                    <ul>
                        <a href="index.html">Peliculas</a>
                        <a href="nosotros.html">Cine</a>
                        <a href="portfolio.html">Promociones</a>
                        <a href="contacto.html">Dulceria</a>
                        <a href="contacto.html">Contactanos</a>

                    </ul>
                </nav>

            </div>          
        </div>        
    </header>
        
    )
    
}

export default Header;


