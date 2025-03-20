
import Aside from '../../components/Aside';
import CatalogPopular from '../../components/CatalogPopular';
import CatalogRecomendation from '../../components/CatalogRecomendation';

const Detail = () => {
    return (
        <main className="detail">
                <Aside/>

                <section>
                    <div>

                        <div>
                            <div>
                                <div>
                                    <span>Sports car with the best designn and acceleration</span>
                                    <span>Safety and comfort while driving a futuristic and elegant sports car</span>
                                </div>

                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>

                                <div>
                                    <img src="" alt="" />
                                </div>

                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <span>Nissan GT - R</span>
                                    <div>
                                        <span>440+ Reviewer</span>
                                    </div>
                                </div>

                                {/* icon Fav */}
                            </div>

                            <div>
                                <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                            </div>

                            <div>
                                <div>
                                    <div>
                                        <span>Type Car</span>
                                        <span>Sport</span>
                                    </div>

                                    <div>
                                        <span>Steering</span>
                                        <span>Manual</span>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <span>Capacity</span>
                                        <span>2 Person</span>
                                    </div>

                                    <div>
                                        <span>Gasoline</span>
                                        <span>70L</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h2>$80.00/<span>day</span></h2>
                                    <span>$100.00</span>
                                </div>

                                <button>Rent Now</button>
                            </div>
                        </div>
                        
                    </div>

                    <div>
                        <div>
                            <h1>Reviews</h1>
                            <div>13</div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <span>Alex Stanton</span>
                                        <span>CEO at Bukalapak</span>
                                    </div>
                                </div>
                                <div>
                                    <span>21 July 2022</span>
                                    {/* stars */}
                                </div>
                            </div>
                            <div>
                                <p>We are very happy with the service from the MORENT App. Morent has a low price . . . </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <span>Skylar Dias</span>
                                        <span>CEO at Amazon</span>
                                    </div>
                                </div>
                                <div>
                                    <span>20July 2022</span>
                                    {/* stars */}
                                </div>
                            </div>
                            <div>
                                <p>We are greatly helped by the services of the MORENT Application. Morent has a low . . .</p>
                            </div>
                        </div>

                        <div>
                            <button>Show all</button>
                        </div>
                    </div>
                </section>

                <section>
                    <CatalogPopular/>
                    <CatalogRecomendation/>
                </section>            
        </main>
    )
}

export default Detail;