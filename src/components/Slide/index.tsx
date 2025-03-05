import img from '../../../public/img/car.png'
import '../../sass/components/_Slide.scss'
import Button from '../Button'

export const Slide = () => {
    return (
        <section className='container-slid'>
            <div className="slide-car1">

                <div className='container-infos'>
                    <div className='container-title'>
                        <span className='title'>The Best Platform for Car Rental</span>
                        <span className='subtitle'>Ease of doing a car rental safely and reliably. Of course at a low price.</span>
                    </div>
                    <Button/>
                </div>

                <div className='container-img'>
                    <img src={img} alt="carro" />
                </div>
            </div>
        </section>
    )
}
