import { HiStar, HiOutlineStar } from "react-icons/hi";
import carV1 from '../../../public/img/view1.png'
import "../../sass/pages/_Payment.scss";
import visa from "../../assets/imgs/Visa.png";
import paypal from "../../assets/imgs/PayPal.png";
import bitcoin from "../../assets/imgs/Bitcoin.png";
import sf from "../../assets/imgs/security-safety.png";

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
                                        <HiStar />
                                        <HiStar />
                                        <HiStar />
                                        <HiStar />
                                        <HiOutlineStar className='star-off' />
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

                <section className="container-steps">

                    <div className="header-step">
                        <div className="header-form">
                            <h2 className="title">Billing Info</h2>
                            <span className="subtitle">Please enter your billing info</span>
                        </div>

                        <span className="steps">Step 1 of 4</span>
                    </div>

                    <form className="form-step">
                        <div className="container-inputs">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name"/>
                        </div>
                        
                        <div className="container-inputs">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" placeholder="Address"/>
                        </div>
                        
                        <div className="container-inputs">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Phone Number"/>
                        </div>
                        
                        <div className="container-inputs">
                            <label htmlFor="city">Town/city</label>
                            <input type="text" id="city" name="city" placeholder="Town or city"/>
                        </div>
                    </form>
                </section>

                <section className="container-steps">
                    <div className="header-step">
                        <div className="header-form">
                            <h2 className="title">Rental Info</h2>
                            <span className="subtitle">Please select your rental date</span>
                        </div>

                        <span className="steps">Step 2 of 4</span>
                    </div>

                    <form className="form-step form-stap-2">

                        <div className="container-pick-and-drop">

                            <div className="container-inputs container-input-radio">
                                <input type="radio" name="pick" id="pick"/>
                                <label htmlFor="pick">Pick - Up</label>
                            </div>

                            <div className="container-inputs">
                                <label htmlFor="pickup-location">Localização</label>
                                <select id="pickup-location" name="pickup-location">
                                    <option value="">Selecione sua cidade</option>
                                </select>
                            </div>

                            <div className="container-inputs">
                                <label htmlFor="pickup-time">Horário</label>
                                <input type="time" id="pickup-time" name="pickup-time"/>
                            </div>

                            <div className="container-inputs">
                                <label htmlFor="pickup-date">Data</label>
                                <input type="date" id="pickup-date" name="pickup-date"/>
                            </div>
                        </div>

                        <div className="container-pick-and-drop">

                            <div className="container-inputs container-input-radio">
                                <input type="radio" name="drop" id="drop"/>
                                <label htmlFor="drop">Drop - Off</label>
                            </div>

                            <div className="container-inputs">
                                <label htmlFor="dropoff-location">Localização</label>
                                <select id="dropoff-location" name="dropoff-location">
                                    <option value="">Selecione sua cidade</option>
                                </select>
                            </div>

                            <div className="container-inputs">
                                <label htmlFor="dropoff-time">Horário</label>
                                <input type="time" id="dropoff-time" name="dropoff-time"/>
                            </div>

                            <div className="container-inputs">
                                <label htmlFor="dropoff-date">Data</label>
                                <input type="date" id="dropoff-date" name="dropoff-date"/>
                            </div>
                        </div>
                    </form>
                </section>

                <section className="container-steps">

                    <div className="header-step">
                        <div className="header-form">
                            <h2 className="title">Payment Method</h2>
                            <span className="subtitle">Please enter your payment method</span>
                        </div>

                        <span className="steps">Step 3 of 4</span>
                    </div>

                    <form className="form-card">
                        <div>
                            <div className="container-inputs container-input-radio">
                                <input type="radio" name="pick" id="pick"/>
                                <label htmlFor="pick">Credit Card</label>
                            </div>

                            <div>
                                <img src={visa} alt="logo visa" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" id="card-number" name="card-number" placeholder="Card Number"/>
                        </div>

                        <div>
                            <label htmlFor="card-holder">Card Holder</label>
                            <input type="text" id="card-holder" name="card-holder" placeholder="Card Holder"/>
                        </div>

                        <div>
                            <label htmlFor="expiration">Expiration Date</label>
                            <input type="text" id="expiration" name="expiration" placeholder="DD/MM/YY"/>
                        </div>

                        <div>
                            <label htmlFor="cvc">CVC</label>
                            <input type="text" id="cvc" name="cvc" placeholder="CVC"/>
                        </div>

                    </form>

                    <form className="form-card">
                        <div>
                            <div className="container-inputs container-input-radio">
                                <input type="radio" name="pick" id="pick"/>
                                <label htmlFor="pick">PayPal</label>
                            </div>

                            <div>
                                <img src={paypal} alt="logo Paypal" />
                            </div>
                        </div>
                    </form>

                    <form className="form-card">
                        <div>
                            <div className="container-inputs container-input-radio">
                                <input type="radio" name="pick" id="pick"/>
                                <label htmlFor="pick">Bitcoin</label>
                            </div>

                            <div>
                                <img src={bitcoin} alt="logo Bitcoin" />
                            </div>
                        </div>
                    </form>


                </section>

                <section className="container-steps">

                    <div className="header-step">
                        <div className="header-form">
                            <h2 className="title">Confirmation</h2>
                            <span className="subtitle">We are getting to the end. Just few
                            clicks and your rental is ready!</span>
                        </div>

                        <span className="steps">Step 4 of 4</span>
                    </div>

                    <form>
                        <div>
                            <input type="radio" name="termo-1" id="termo-1" />
                            <label htmlFor="termo-1">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                        </div>

                        <div>
                            <input type="radio" name="termo-2" id="termo-2" />
                            <label htmlFor="termo-2">I agree with our terms and conditions and privacy policy!</label>
                        </div>
                        
                        <button>Rental Now</button>
                    </form>

                    <div>
                        <img src={sf} alt="security-safety"/>
                        <span>All your data are safe</span>
                        <span>We are using the most advanced security to provide you the best experience ever.</span>
                    </div>
                </section>

            </section>
        </main>
    )
}

export default Payment