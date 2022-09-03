import yohan from '../Yohan.jpg';
import exorcista from '../assets/exorcista.jpg'
import dragonball from '../assets/Dragon_Ball.jpg'
import reflejo from '../assets/maxresdefault.jpg'
import mundo from '../assets/mundo gordo.jpg'
import vertigo from '../assets/vertigo.jpg'
import descarga from '../assets/desc3.webp'
import jurasic from '../assets/jurassic.jpg'
import jurasicworld from '../assets/Jurassic_World.jpg'

const Cartillas=()=>{
    return(

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 mt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='text-center'>EL EXORCISTA</h2>
                    <h6 className='text-center'>El resultado es una experiencia mas absorbente que nunca
                    </h6>                    
                    <hr />
                  </div>
                  <div className=''>
                    <img src={exorcista} className="logoCartelera rounded mx-auto d-block" alt="logo" />
                    <hr />                    
                  </div>
                  <div className='d-grid'>
                    <button className='btn btn-danger' type="button">Comprar</button>
                  </div>                  
                </div>
              </div>
              <div className='col-md-4 mt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='text-center'>VERTIGO</h2>
                    <h6 className='text-center'>A una distancia considerable del suelo y sin cobertura, 
                    su ascenso se complica.</h6>                    
                    <hr/>
                  </div>
                  <div className=''>
                    <img src={vertigo} className="logoCartelera rounded mx-auto d-block" alt="logo" />
                    <hr />
                  </div>
                  <div className='d-grid gap-2'>
                    <button className='btn btn-danger ' type="button">Comprar</button>
                  </div>
                  
                </div>
              </div>
              <div className='col-md-4 mt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='text-center'>MUNDO GORDO</h2>
                    <h6 className='text-center'>Inspirada en el stand up comedy de Daniel San Román.</h6>
                    <hr />
                  </div>
                  <div className=''>
                    <img src={mundo} className="logoCartelera rounded mx-auto d-block" alt="logo" />
                    <hr />
                  </div>
                  <div className='d-grid gap-2'>
                    <button className='btn btn-danger' type="button">Comprar</button>
                  </div>                  
                </div>
              </div>
              <div className='col-md-4 mt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='text-center'>JURASSIC WORLD 2022</h2>
                    <h6 className='text-center'>Con los dinosaurios por todo el mundo, la convivencia entre el presente y el pasado alcanza un nuevo nivel de tensión.</h6>
                    
                    <hr />
                    <img src={jurasicworld} className="logoCartelera rounded mx-auto d-block" alt="logo" />
                    <hr />
                    <div className='d-grid gap-2'>
                      <button className='btn btn-danger' type="button">Comprar</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='text-center'>DESCARGA SINIESTRA</h2>
                    <h6 className='text-center'>Una amiga de Asia descarga una extraña aplicación en su teléfono sin que ella se de cuenta.</h6>
                    
                    <hr />
                    <img src={descarga} className="logoCartelera rounded mx-auto d-block" alt="logo" />
                    <hr />
                    <div className='d-grid gap-2'>
                      <button className='btn btn-danger' type="button">Comprar</button>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='text-center'>DRAGON BALL SUPER</h2>
                    <h6 className='text-center'>El Ejército de la Cinta Roja del pasado de Goku regresa con nuevos androides para desafiarlo a él y a sus amigos.</h6>
                    
                    <hr />
                    <img src={dragonball} className="logoCartelera rounded mx-auto d-block" alt="logo"  />
                    <hr />
                    <div className='d-grid gap-2'>
                      <button className='btn btn-danger' type="button">Comprar</button>

                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>         
        </section>
    )
}


export default Cartillas;