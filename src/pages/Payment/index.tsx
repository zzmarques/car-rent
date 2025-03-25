import { HiStar, HiOutlineStar } from "react-icons/hi";
import carV1 from '../../../public/img/view1.png'
import "../../sass/pages/_Payment.scss";

const Payment = () => {
    return (
        <main className="payment">

            <section className="content-payment">
                    <div className="rental-card">

                        <div className="rental-card-header">

                            <div className="cabecalho-rental">
                                <span className="title">Rental Summary</span>
                                <span className="subtitle">Prices may change depending on the length of the rental and the price of your rental car.</span>
                            </div>

                            <div className="container-info-car">
                                <div className='container-foto-car'>
                                    <img src={carV1} alt="" />
                                </div>

                                <div className="content-infos-car">
                                    <span className="name-car">Nissan GT - R</span>
                                    <div className='cabecalho-reviewer'>

                                        <div className='container-star'>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiOutlineStar className='star-off'/>
                                        </div>
                                        <span className='qtd-review'>440+ Reviewer</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="line"></div>

                        <div className="container-prices">

                            <div className="container-infos-prices">
                                <div className="info-prices">
                                    <span className="name">Subtotal</span>
                                    <span className="des">$80.00</span>
                                </div>

                                <div className="info-prices">
                                    <span className="name">tax</span>
                                    <span className="des">$0</span>
                                </div>
                            </div>

                            <div className="container-code">
                                <span className="promo-code">Apply promo code</span>
                                <span className="now">Apply now</span>
                            </div>

                            <div className="container-total-price">
                                <div className="content-txts-price">
                                    <span className="tp">Total Rental Price</span>
                                    <span className="pr">Overall price rental</span>
                                </div>

                                <span className="total-price">$80.00</span>
                            </div>

                        </div>

                    </div>
            </section>
        </main>
    )
}

export default Payment