import "../../sass/pages/_Dashboard.scss"
import { CgMore } from "react-icons/cg";
import car1 from '../../../public/img/view1.png';
import car2 from '../../../public/img/ads1.png';
import car3 from '../../../public/img/asd2.png';
import car4 from '../../../public/img/car-3.png';
import car5 from '../../../public/img/car3.png';
import AsideAdmin from "../../components/AsideAdmin";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import PickDrop from "../../components/PickDrop";

const Dashboard = () => {

    const location = useLocation();
    
    const showHamburger: boolean = location.pathname.includes("/dashboard");

    return (
        <>
            <Header HidenOrShowComponents={showHamburger}/>
            <main className="dashboard">
                <AsideAdmin/>

                <section className="container-dashboard">
                    <div className="detail-rental">
                        <div className="container-detail-rental">
                            <div className="container-title">
                                <h1>Detail Rent</h1>
                            </div>
                            <div className="map"></div>

                            <div className="container-car">
                                <div className="car-img">
                                    <img src={car1} alt="carro" />
                                </div>

                                <div className="car-info">
                                    <span className="car-name">Nissan GT-R</span>
                                    <div className="container-subtitle">
                                        <span className="type-car">Sport Car</span>
                                        <span className="car-id">#9761</span>
                                    </div>
                                </div>
                            </div>

                            <div className="content-pick-and-drop">
                                <PickDrop/>
                            </div>

                            <div className="conatiner-pice-total">
                                <div className="titles-container">
                                    <span className="title">Total Rental Price</span>
                                    <span className="subtitle">Overall price rental</span>
                                </div>

                                <span className="pice-total">$80.00</span>
                            </div>

                        </div>

                    </div>

                    <div className="container-top-recent">

                        <div className="top-cars">
                            <div className="container-top-cars">
                                <div className="header-top-cars">
                                    <h2>Top 5 Car Rental</h2>

                                    <div className="more">
                                        <CgMore />
                                    </div>
                                </div>
                                
                                <div className="rental-and-top-cars">

                                    <div className="rental-car">
                                        <div className="container-rental-car">
                                            <div className="total-rental-car">
                                                <h2>72, 030</h2>
                                                <span className="subtitle">Rental Car</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content-top-cars">

                                        <div className="container-top-car">
                                            <div className="container-type-car elemento1">
                                                <span className="subtitle">Sport Car</span>
                                            </div>
                                            <span className="total">17,439</span>
                                        </div>

                                        <div className="container-top-car">
                                            <div className="container-type-car elemento2">
                                                <span className="subtitle">SUV</span>
                                            </div>
                                            <span className="total">9,478</span>
                                        </div>

                                        <div className="container-top-car">
                                            <div className="container-type-car elemento3">
                                                <span className="subtitle">Coupe</span>
                                            </div>
                                            <span className="total">18,197</span>
                                        </div>

                                        <div className="container-top-car">
                                            <div className="container-type-car elemento4">
                                                <span className="subtitle">Hatchback</span>
                                            </div>
                                            <span className="total">12,510</span>
                                        </div>

                                        <div className="container-top-car">
                                            <div className="container-type-car elemento5">
                                                <span className="subtitle">MPV</span>
                                            </div>
                                            <span className="total">14,406</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="recent-cars">
                            <div className="container-recent-cars">
                                <div className="header-recent-cars">
                                    <span className="title">Recent Transaction</span>
                                    <div className="btn-all">
                                        <span>View All</span>
                                    </div>
                                </div>

                                <div className="content-recent-cars">

                                    <div className="container-recent-car">

                                        <div className="content-car">
                                            <div className="car-img">
                                                <img src={car3} alt="carro" />
                                            </div>
                                            <div className="about-car">
                                                <span className="name-car">Nissan GT-R</span>
                                                <span className="type-car">Sport Card</span>
                                            </div>
                                        </div>

                                        <div className="container-date-and-price">
                                            <span className="date">20 July</span>
                                            <span className="price">$80.00</span>
                                        </div>
                                    </div>

                                    <div className="line"></div>

                                    <div className="container-recent-car">
                                        <div className="content-car">
                                            <div className="car-img">
                                                <img src={car2} alt="carro" />
                                            </div>
                                            <div className="about-car">
                                                <span className="name-car">Koegnigsegg</span>
                                                <span className="type-car">Sport Card</span>
                                            </div>
                                        </div>
                                        <div className="container-date-and-price">
                                            <span className="date">19 July</span>
                                            <span className="price">$99.00</span>
                                        </div>
                                    </div>

                                    <div className="line"></div>

                                    <div className="container-recent-car">
                                        <div className="content-car">
                                            <div className="car-img">
                                                <img src={car4} alt="carro" />
                                            </div>
                                            <div className="about-car">
                                                <span className="name-car">Rolls-Royce</span>
                                                <span className="type-car">Sport Card</span>
                                            </div>
                                        </div>
                                        <div className="container-date-and-price">
                                            <span className="date">18 July</span>
                                            <span className="price">$96.00</span>
                                        </div>
                                    </div>

                                    <div className="line"></div>
                                    
                                    <div className="container-recent-car">
                                        <div className="content-car">
                                            <div className="car-img">
                                                <img src={car5} alt="carro" />
                                            </div>
                                            <div className="about-car">
                                                <span className="name-car">CR-V</span>
                                                <span className="type-car">SUV</span>
                                            </div>
                                        </div>
                                        <div className="container-date-and-price">
                                            <span className="date">17 July</span>
                                            <span className="price">$80.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
        </>
    );
};

export default Dashboard;