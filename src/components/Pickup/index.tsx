import { FiChevronDown } from "react-icons/fi";
import { HiArrowsUpDown } from "react-icons/hi2";
import '../../sass/components/_Pickup.scss';

const Pickup = () => {
    return (
        <section className="container-pickup">

            <div className="cardPick">
                <div className='conetent-pick'>
                    <label className='label-pick'>
                        <input type="radio" name="trip" checked/>
                        <span>Pick - Up</span>
                    </label>
                    
                    <div className="info">
                        <div className="field">
                            <label>Locations</label>
                            <div className="container-select">
                                <div className="select">
                                    <span>Semarang</span>
                                    <FiChevronDown/>
                                </div>
                            </div>
                        </div>
                        <div className="linha"></div>
                        <div className="field">
                            <label>Date</label>
                            <div className="container-date">
                                <div className="date">
                                    <span>20 July 2022</span>
                                    <FiChevronDown/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="linha"></div>
                        <div className="field">
                            <label>Time</label>
                            <div className="container-time">
                                <div className="time">
                                    <span>07:00</span>
                                    <FiChevronDown/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <button className="swap-btn"><HiArrowsUpDown/></button>

            <div className="cardPick">
                <div className='conetent-pick'>
                    <label className='label-drop'>
                        <input type="radio" name="trip"/>
                        <span>Drop - Off</span>
                    </label>
                    <div className="info">
                            <div className="field">
                                <label>Locations</label>
                                <div className="container-select">
                                    <div className="select">
                                        <span>Semarang</span>
                                        <FiChevronDown/>
                                    </div>
                                </div>
                            </div>
                            <div className="linha"></div>
                            <div className="field">
                                <label>Date</label>
                                <div className="container-date">
                                    <div className="date">
                                        <span>20 July 2022</span>
                                        <FiChevronDown/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="linha"></div>
                            <div className="field">
                                <label>Time</label>
                                <div className="container-time">
                                    <div className="time">
                                        <span>07:00</span>
                                        <FiChevronDown/>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pickup;