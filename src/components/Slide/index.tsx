import car1 from '../../../public/img/car.png';
// import car2 from '../../../public/img/car2.png';
import '../../sass/components/_Slide.scss';

export const Slide = () => {
    return (
        <section className='container-slid'>
            <div className="slide-car1">

                <div className='container-infos'>
                    <div className='container-title'>
                        <span className='title'>The Best Platform for Car Rental</span>
                        <span className='subtitle'>Ease of doing a car rental safely and reliably. Of course at a low price.</span>
                    </div>
                    <button className='btn ads1'>Rental car</button>
                </div>

                <div className='container-img'>
                    <img src={car1} alt="carro" />
                </div>
            </div>

            {/* <div className="slide-car2">

                <div className='container-infos'>
                    <div className='container-title'>
                        <span className='title'>Easy way to rent a car at a low price</span>
                        <span className='subtitle'>Providing cheap car rental services and safe and comfortable facilities.</span>
                    </div>
                    <button className='btn ads2'>Rental car</button>
                </div>

                <div className='container-img'>
                    <img src={car2} alt="carro" />
                </div>
            </div> */}
        </section>
    )
}
