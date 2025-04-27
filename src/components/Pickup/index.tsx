import { FiChevronDown } from "react-icons/fi";
import { HiArrowsUpDown } from "react-icons/hi2";
import '../../sass/components/_Pickup.scss';
import React from "react";
import { PropsHidenOrShow } from "../../types/propsReatcNode";

const Pickup: React.FC<PropsHidenOrShow> = ( {HidenOrShowComponents} ) => {
    return (
        <section className={!HidenOrShowComponents ? "container-pickup-category" : "container-pickup"}>

            <div className="cardPick">
                <div className='conetent-pick'>
                    <label className='label-pick'>
                        <input type="radio" name="trip" checked/>
                        <span>Pick - Up</span>
                    </label>
                    
                    <div className="container-inputs">

                        <div className="content-input">
                            <label htmlFor="pickup-location">Locations</label>
                            
                            <div className="select-wrapper">
                                <select id="pickup-location" name="pickup-location">
                                    <option value="Kota Semarang">Semarang</option>
                                </select>
                                <FiChevronDown className='icon'/>
                            </div>

                        </div>

                        <div className="linha"></div>

                        <div className="content-input">
                            <label htmlFor="pickup-date">Date</label>

                            <div className="select-wrapper">
                                <input type="date" className="invisible-input" id="pickup-date" name='pickup-date' value="2022-07-20"/>
                                <div className="custom-display" id="displayDate">
                                    <span>20 July 2022</span>
                                    <FiChevronDown/>
                                </div>
                            </div>
                        </div>
                        <div className="linha"></div>

                        <div className="content-input">
                            <label htmlFor="pickup-time">Time</label>

                            <div className="select-wrapper">
                                <input type="time" className="invisible-input time" name='pickup-time' id="pickup-time" value="07:00"/>
                                <div className="custom-display" id="displayTime">
                                    <span>07.00</span>
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

                    <div className="container-inputs">

                        <div className="content-input">
                            <label htmlFor="pickup-location">Locations</label>
                            
                            <div className="select-wrapper">
                                <select id="pickup-location" name="pickup-location">
                                    <option value="Kota Semarang">Semarang</option>
                                </select>
                                <FiChevronDown className='icon'/>
                            </div>

                        </div>

                        <div className="linha"></div>

                        <div className="content-input">
                            <label htmlFor="pickup-date">Date</label>

                            <div className="select-wrapper">
                                <input type="date" className="invisible-input" id="pickup-date" name='pickup-date' value="2022-07-20"/>
                                <div className="custom-display" id="displayDate">
                                    <span>20 July 2022</span>
                                    <FiChevronDown/>
                                </div>
                            </div>
                        </div>
                        <div className="linha"></div>

                        <div className="content-input">
                            <label htmlFor="pickup-time">Time</label>

                            <div className="select-wrapper">
                                <input type="time" className="invisible-input time" name='pickup-time' id="pickup-time" value="07:00"/>
                                <div className="custom-display" id="displayTime">
                                    <span>07.00</span>
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