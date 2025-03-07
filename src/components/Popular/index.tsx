import { GoHeartFill, GoHeart } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { RiSteeringFill } from "react-icons/ri";

const Popular = () => {
    return (
        <section className="container-popular">
            <div className="cabecalho">
                <span>Popular Car</span>

                <a href="#"><span>View All</span></a>
            </div>

            <div className="card">

                <div className="card-content">
                    <div className="card-cabecalho">
                        <div className="container-name">
                            <span className="name">Koenigsegg</span>
                            <span className="type">Sport</span>
                        </div>
                        <GoHeartFill />
                    </div>

                    <div className="container-img">
                        <img src="" alt="carro" />
                    </div>

                    <div className="container-details">
                        <div className="details">
                            <FaGasPump />
                            <span>90L</span>
                        </div>

                        <div className="details">
                            <RiSteeringFill />
                            <span>Manual</span>
                        </div>

                        <div className="details">
                            <MdPeopleAlt />
                            <span>2 People</span>
                        </div>
                    </div>

                    <div className="container-price">
                        <span className="price">
                            $99.00/<span className="des">day</span>
                        </span>

                        <button className="btn btn-card">Rental Now</button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Popular;