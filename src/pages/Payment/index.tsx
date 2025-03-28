import { HiStar, HiOutlineStar } from "react-icons/hi";
import carV1 from '../../../public/img/view1.png'
import "../../sass/pages/_Payment.scss";
import visa from "../../assets/imgs/Visa.png";
import paypal from "../../assets/imgs/PayPal.png";
import bitcoin from "../../assets/imgs/Bitcoin.png";
import sf from "../../assets/imgs/security-safety.png";
import StepHeader from "../../components/StepHeader";
import Steps from "../../components/Steps";

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

                <div className="container-forms">
                    <Steps>
                        <StepHeader 
                            title="Billing Info" 
                            subtitle="Please enter your billing info" 
                            step="Step 1 of 4"
                        />

                        <form className="form-step-1">
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
                    </Steps>

                    <Steps>
                        <StepHeader 
                            title="Rental Info" 
                            subtitle="Please select your rental date" 
                            step="Step 2 of 4"
                        />

                        <form className="form-stap-2">

                            <div className="container-pick-and-drop">

                                <div className="container-inputs container-input-radio">
                                    <input type="radio" name="pick" id="pick"/>
                                    <label htmlFor="pick">Pick - Up</label>
                                </div>

                                <div className="content-inputs">

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
                            </div>

                            <div className="container-pick-and-drop">

                                <div className="container-inputs container-input-radio">
                                    <input type="radio" name="drop" id="drop"/>
                                    <label htmlFor="drop">Drop - Off</label>
                                </div>

                                <div className="content-inputs">

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
                            </div>
                        </form>
                    </Steps>

                    <Steps>
                        <StepHeader 
                            title="Payment Method" 
                            subtitle="Please enter your payment method" 
                            step="Step 3 of 4"
                        />

                        <form className="form-step-3 active">
                            <div className="pag">
                                <div className="container-input-radio">
                                    <input type="radio" name="pick-pg" id="pick-pg"/>
                                    <label htmlFor="pick-pg">Credit Card</label>
                                </div>

                                <div>
                                    <img src={visa} alt="logo visa" />
                                </div>
                            </div>

                            {/* <div className="content-input-steps-3">

                                <div className="container-inputs">
                                    <label htmlFor="card-number">Card Number</label>
                                    <input type="text" id="card-number" name="card-number" placeholder="Card Number"/>
                                </div>

                                <div className="container-inputs">
                                    <label htmlFor="card-holder">Card Holder</label>
                                    <input type="text" id="card-holder" name="card-holder" placeholder="Card Holder"/>
                                </div>

                                <div className="container-inputs">
                                    <label htmlFor="expiration">Expiration Date</label>
                                    <input type="text" id="expiration" name="expiration" placeholder="DD/MM/YY"/>
                                </div>

                                <div className="container-inputs">
                                    <label htmlFor="cvc">CVC</label>
                                    <input type="text" id="cvc" name="cvc" placeholder="CVC"/>
                                </div>

                            </div> */}

                        </form>

                        <form className="form-step-3">
                            <div className="pag">
                                <div className="container-input-radio">
                                    <input type="radio" name="pick-pg" id="pick-pg"/>
                                    <label htmlFor="pick-pg">PayPal</label>
                                </div>

                                <div>
                                    <img src={paypal} alt="logo Paypal" />
                                </div>
                            </div>
                        </form>

                        <form className="form-step-3">
                            <div className="pag">
                                <div className="container-input-radio">
                                    <input type="radio" name="pick-pg" id="pick-pg"/>
                                    <label htmlFor="pick-pg">Bitcoin</label>
                                </div>

                                <div>
                                    <img src={bitcoin} alt="logo Bitcoin" />
                                </div>
                            </div>
                        </form>
                    </Steps>

                    <Steps>
                        <StepHeader 
                            title="Confirmation" 
                            subtitle="We are getting to the end. Just few
                            clicks and your rental is ready!" 
                            step="Step 4 of 4"
                        />

                        <form className="form-step-4">
                            <div className="container-checkbox">
                                <input type="checkbox" name="termo-1" id="termo-1" />
                                <label htmlFor="termo-1">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                            </div>

                            <div className="container-checkbox">
                                <input type="checkbox" name="termo-2" id="termo-2" />
                                <label htmlFor="termo-2">I agree with our <span>terms and conditions</span> and <span>privacy policy</span>!</label>
                            </div>
                            
                            <button className="comfirm">Rental Now</button>
                        </form>

                        <div className="container-sf">
                            <img src={sf} alt="security-safety"/>
                            <span className="title">All your data are safe</span>
                            <span className="subtitle">We are using the most advanced security to provide you the best experience ever.</span>
                        </div>
                    </Steps>
                </div>
            </section>
        </main>
    )
}

export default Payment