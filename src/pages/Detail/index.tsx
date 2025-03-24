
import Aside from '../../components/Aside';
import '../../sass/pages/_Detail.scss';
import carImg from '../../../public/img/asd2.png';
import carV1 from '../../../public/img/view1.png'
import carV2 from '../../../public/img/view2.png'
import carV3 from '../../../public/img/view3.png'
import avatar1 from '../../../public/img/profill1.png'
import avatar2 from '../../../public/img/profill2.png'
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { HiArrowsUpDown } from "react-icons/hi2";
import { GoHeartFill, GoHeart } from "react-icons/go";
import CatalogHeader from '../../components/CatalogHeader';
import CardPopular from '../../components/CardPopular';


const Detail = () => {
    return (
        <main className="detail">
                <Aside/>

                <section className="content-detail">

                    <section className='container-detail'>
                        <div className='container-about-car'>

                            <div className='container-ads'>
                                <div className='content-ads'>
                                    <div className='ads-title'>
                                        <span className='ads-title'>Sports car with the best designn and acceleration</span>
                                        <span className='ads-subtitle'>Safety and comfort while driving a futuristic and elegant sports car</span>
                                    </div>

                                    <div className='car-ads'>
                                        <img src={carImg} alt="" />
                                    </div>
                                </div>

                                <div className='ads-prev'>
                                    <div className='prevs active'>
                                        <img src={carV1} alt="" />
                                    </div>

                                    <div className='prevs'>
                                        <img src={carV2} alt="" />
                                    </div>

                                    <div className='prevs'>
                                        <img src={carV3} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='container-detail-car'>
                                <div className='container-detail-header'>
                                    <div className='container-detail-title'>
                                        <span className='name-car'>Nissan GT - R</span>
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

                                    <div className='icon-fav'>
                                        <GoHeartFill/>
                                    </div>
                                </div>

                                <div className='container-detail-p'>
                                    <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                                </div>

                                <div className='container-spesification'>
                                    <div className='content-spesification'>
                                        <div className='spesification-type spesification'>
                                            <span className='sub'>Type Car</span>
                                            <span className='des'>Sport</span>
                                        </div>

                                        <div className='spesification-streering spesification'>
                                            <span className='sub'>Steering</span>
                                            <span className='des'>Manual</span>
                                        </div>
                                    </div>

                                    <div className='content-spesification'>
                                        <div className='spesification-capacity spesification' >
                                            <span className='sub'>Capacity</span>
                                            <span className='des'>2 Person</span>
                                        </div>

                                        <div className='spesification-gas spesification'>
                                            <span className='sub'>Gasoline</span>
                                            <span className='des'>70L</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='container-detail-price'>
                                    <div className='content-price'>
                                        <h2>$80.00/<span className='day'>days</span></h2>
                                        <span className='price-off'>$100.00</span>
                                    </div>

                                    <button className='btn-now'>Rent Now</button>
                                </div>
                            </div>
                            
                        </div>

                        <div className='container-reviews'>
                            <div className='container-reviews-title'>
                                <h1>Reviews</h1>
                                <div className='qnt-reviews'>13</div>
                            </div>

                            <div className='content-review'>
                                <div className='content-review-cabecalho'>
                                    <div className='info-perfil'>
                                        <div className='foto-perfil'>
                                            <img src={avatar1} alt="" />
                                        </div>
                                        <div className='infos-pessoal'>
                                            <span className='name'>Alex Stanton</span>
                                            <span className='ceo'>CEO at Bukalapak</span>
                                        </div>
                                    </div>

                                    <div className='container-date'>
                                        <span className='date'>21 July 2022</span>
                                        <div className='container-star'>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiOutlineStar className='star-off'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-coment'>
                                    <p>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                </div>
                            </div>

                            <div className='content-review'>
                                <div className='content-review-cabecalho'>
                                    <div className='info-perfil'>
                                        <div className='foto-perfil'>
                                            <img src={avatar2} alt="" />
                                        </div>
                                        <div className='infos-pessoal'>
                                            <span className='name'>Skylar Dias</span>
                                            <span className='ceo'>CEO at Amazon</span>
                                        </div>
                                    </div>

                                    <div className='container-date'>
                                        <span className='date'>20July 2022</span>
                                        <div className='container-star'>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiStar/>
                                            <HiOutlineStar className='star-off'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-coment'>
                                    <p>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                </div>
                            </div>

                            <div className='container-reviews-show'>
                                <button className='btn-show-all'>Show all <FiChevronDown/></button>
                            </div>
                        </div>
                    </section>

                    <section className='container-catalogs'>
                        <div className='container-cats'>
                            <CatalogHeader>
                                <span>Recent Car</span>

                                <a href="#"><span>View All</span></a>
                            </CatalogHeader>
                            <div className='cats-cards'>
                                <CardPopular/>
                                <CardPopular/>
                                <CardPopular/>
                            </div>
                        </div>

                        <div className='container-cats'>
                            <CatalogHeader>
                                <span>Recomendation Car</span>

                                <a href="#"><span>View All</span></a>
                            </CatalogHeader>
                            <div className='cats-cards'>
                                <CardPopular/>
                                <CardPopular/>
                                <CardPopular/>
                            </div>
                        </div>
                    </section>  

                </section>          
        </main>
    )
}

export default Detail;