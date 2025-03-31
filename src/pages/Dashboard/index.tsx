import "../../sass/pages/_Dashboard.scss"
import { CgMore } from "react-icons/cg";

const Dashboard = () => {
    return (
        <main className="dashboard">
            <section>
                <div>
                    <h1>Detail Rent</h1>
                </div>
                <div className="map"></div>

                <div>
                    <div>
                        <img src="" alt="carro" />
                    </div>

                    <div>
                        <span>Nissan GT-R</span>
                        <div>
                            <span>Sport Car</span>
                            <span>#9761</span>
                        </div>
                    </div>
                </div>

                <div>
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
                </div>

                <div>
                    <div>
                        <span>Total Rental Price</span>
                        <span>Overall price rental</span>
                    </div>

                    <span>$80.00</span>
                </div>

                <div>
                    <div>
                        <h2>Top 5 Car Rental</h2>

                        <div>
                            <CgMore />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2>72, 030</h2>
                            <span>Rental Car</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <span>Sport Car</span>
                            </div>
                            <span>17,439</span>
                        </div>

                        <div>
                            <div>
                                <span>SUV</span>
                            </div>
                            <span>9,478</span>
                        </div>

                        <div>
                            <div>
                                <span>Coupe</span>
                            </div>
                            <span>18,197</span>
                        </div>

                        <div>
                            <div>
                                <span>Hatchback</span>
                            </div>
                            <span>12,510</span>
                        </div>

                        <div>
                            <div>
                                <span>MPV</span>
                            </div>
                            <span>14,406</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <span>Recent Transaction</span>
                        <div>
                            <span>View All</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>
                                <div>
                                    <img src="" alt="carro" />
                                </div>
                                <div>
                                    <span>Nissan GT-R</span>
                                    <span>Sport Card</span>
                                </div>
                            </div>
                            <div>
                                    <span>20 July</span>
                                    <span>$80.00</span>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <img src="" alt="carro" />
                                </div>
                                <div>
                                    <span>Koegnigsegg</span>
                                    <span>Sport Card</span>
                                </div>
                            </div>
                            <div>
                                    <span>19 July</span>
                                    <span>$99.00</span>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <img src="" alt="carro" />
                                </div>
                                <div>
                                    <span>Rolls-Royce</span>
                                    <span>Sport Card</span>
                                </div>
                            </div>
                            <div>
                                    <span>18 July</span>
                                    <span>$96.00</span>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <img src="" alt="carro" />
                                </div>
                                <div>
                                    <span>CR-V</span>
                                    <span>SUV</span>
                                </div>
                            </div>
                            <div>
                                    <span>17 July</span>
                                    <span>$80.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard