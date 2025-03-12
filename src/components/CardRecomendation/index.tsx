import { GoHeartFill, GoHeart } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { RiSteeringFill } from "react-icons/ri";
import img from "../../../public/img/car4.png";

const CardRecomendation = () => {
    return (
        <div className="card-recomendation">
                            
                    <div className="card-cabecalho">
                        <div className="container-name">
                            <span className="name">Koenigsegg</span>
                            <span className="type">Sport</span>
                        </div>
                        <GoHeartFill />
                    </div>

                    <div className="car-info">
                        <div className="container-img">
                            <img src={img} alt="carro" />
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
                    </div>
                    
                    <div className="container-price">
                        <div className="prices">
                            <span className="price">
                                $99.00/<span className="des">day</span>
                            </span>
                            <span className="price-off">
                                $80.00
                            </span>
                        </div>

                        <button className="btn-card">Rental Now</button>
                    </div>

                </div>
    )
}

export default CardRecomendation;