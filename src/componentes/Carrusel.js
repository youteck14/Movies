import yohan from '../Yohan.jpg';
import images1 from '../assets/images1.jfif'
import images2 from '../assets/images2.jfif'
import images3 from '../assets/images3.jfif'
import lotr from '../assets/lotr.jpg'
import lord from '../assets/lordoftherings.jpg'
import sñorrings from '../assets/sñoranillos.jpg'
import halloween from '../assets/Halloween.jpeg'
import avatar from '../assets/avatar.jpeg'
import mercenario from '../assets/mercenarios.jpeg'
import wakanda from '../assets/wakanda.png'

const Carrusel=()=>{
    return(
        <section className='class="d-block p-1 bg-black'>
            <h1 className='text-center text-danger '></h1>
            <div id='controls' className='carousel slide' data-bs-ride="carousel">
                <div className='carousel-indicators'>
                    <button data-bs-target="#controls"
                    data-bs-slide-to="0"
                    className='active'>
                    </button>
                    <button data-bs-target ="#controls" data-bs-slide-to="1"></button>
                    <button data-bs-target="#controls" data-bs-slide-to="2"></button>
                    <button data-bs-target="#controls" data-bs-slide-to="3"></button>
                    
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src={lotr} alt="" class="d-block w-100"/>
                    </div>
                    <div className='carousel-item'>
                        <img src={halloween} alt="" class="d-block w-100"/>
                    </div>
                    <div className='carousel-item'>
                        <img src={avatar} alt="" class="d-block w-100"/>
                    </div>                    
                    <div className='carousel-item'>
                        <img src={wakanda} alt="" class="d-block w-100"/>
                    </div>
                </div>
                <button className='carousel-control-prev' data-bs-target="#controls" data-bs-slide="prev">
                    <span>Previus</span>
                    <span className='carousel-control-prev-icon'></span>
                </button>
                <button className='carousel-control-next' data-bs-target="#controls" data-bs-slide="next">
                    <span>Next</span>
                    <span className='carousel-control-next-icon'></span>
                </button>

            </div>

        </section>

        

         
    )
}


export default Carrusel;