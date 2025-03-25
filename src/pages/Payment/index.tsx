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

                <section aria-labelledby="billing-info">
                    <h2 id="billing-info">Billing Info</h2>
                    <p>Por favor, insira suas informações de cobrança.</p>
                    <form>
                        <label >Nome</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome" required/>
                        
                        <label >Endereço</label>
                        <input type="text" id="address" name="address" placeholder="Endereço" required/>
                        
                        <label >Telefone</label>
                        <input type="tel" id="phone" name="phone" placeholder="Número de telefone" required/>
                        
                        <label >Cidade</label>
                        <input type="text" id="city" name="city" placeholder="Cidade" required/>
                    </form>
                </section>

                <section aria-labelledby="rental-info">
                    <h2 id="rental-info">Rental Info</h2>
                    <p>Por favor, selecione a data do seu aluguel.</p>
                    <form>
                        <fieldset>
                            <legend>Pick-Up</legend>
                            <label >Localização</label>
                            <select id="pickup-location" name="pickup-location" required>
                                <option value="">Selecione sua cidade</option>
                            </select>
                            <label >Horário</label>
                            <input type="time" id="pickup-time" name="pickup-time" required/>
                            <label >Data</label>
                            <input type="date" id="pickup-date" name="pickup-date" required/>
                        </fieldset>

                        <fieldset>
                            <legend>Drop-Off</legend>
                            <label >Localização</label>
                            <select id="dropoff-location" name="dropoff-location" required>
                                <option value="">Selecione sua cidade</option>
                            </select>
                            <label>Horário</label>
                            <input type="time" id="dropoff-time" name="dropoff-time" required/>
                            <label >Data</label>
                            <input type="date" id="dropoff-date" name="dropoff-date" required/>
                        </fieldset>
                        </form>
                </section>

                <section aria-labelledby="payment-method">
                    <h2 id="payment-method">Payment Method</h2>
                    <p>Por favor, insira seu método de pagamento.</p>
                    <form>
                        <fieldset>
                            <legend>Cartão de Crédito</legend>
                            <label >Número do Cartão</label>
                            <input type="text" id="card-number" name="card-number" placeholder="Número do cartão" required />

                            <label >Titular do Cartão</label>
                            <input type="text" id="card-holder" name="card-holder" placeholder="Nome do titular" required />

                            <label >Data de Expiração</label>
                            <input type="text" id="expiration" name="expiration" placeholder="MM/AA" required />

                            <label>CVC</label>
                            <input type="text" id="cvc" name="cvc" placeholder="CVC" required />

                        </fieldset>
                        <fieldset>
                            <legend>Outros Métodos</legend>
                            <label>
                                <input type="radio" name="payment" value="paypal" /> PayPal
                            </label>
                            <label>
                                <input type="radio" name="payment" value="bitcoin" /> Bitcoin
                            </label>
                        </fieldset>
                    </form>
                </section>



            </section>
        </main>
    )
}

                        export default Payment