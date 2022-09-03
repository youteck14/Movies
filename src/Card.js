/* import './Card.css'; */
import './Card.css';
import logo from './logo.svg';
import yohan from './Yohan.jpg';


const Card =()=>{
    return(
        <div className="container">
            <section className="home">
                <header>
                    <img className="profile" src={yohan}  alt="" />
                </header>  
            <article className="post">
                <h1>Yohan Romero</h1>
                <h2>😎🎶🤷‍♂️Estudiante de Desarrollo Web Full Stack - Tecsup🤷‍♂️🎶😎</h2>
                <p>✌☠Estudiante de ingenieria de sistemas.
                    Apacionado por las tecnologias de software y en constante aprendizaje.☠✌
                </p>
            </article>
            
            <nav className="navlogo">
                <a className="logolink" href="#" >
                    <img className="logo" src={"https://i.postimg.cc/75KWhyBL/facebook.png"}  alt="logo" />
                </a>
                <a className="logolink" href="#" >
                    <img className="logo" src={"https://i.postimg.cc/hJwZ81RW/instagram.png"}  alt="logo" />
                </a>
                <a className="logolink" href="#" >
                    <img className="logo" src={"https://i.postimg.cc/f3kg0gFf/linkedin.png"}  alt="logo" />
                    
                </a>
                <a  className="logolink" href="#">
                    <img className="logo" src={"https://i.postimg.cc/gLbMQc0g/silueta-del-logo-de-github-en-un-cuadrado.png"}  alt="logo" />
                </a>
            </nav>            
            </section>         
        </div>
    )
}
/* exportamos la funcion */
export default Card;