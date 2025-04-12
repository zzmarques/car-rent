import '../../sass/components/_PickDrop.scss';
import { FiChevronDown } from "react-icons/fi";


const PickDrop = () => {
    return (
        <form className="form">

            <div className="container-pick-and-drop">

                <div className="container-inputs container-input-radio">
                    <input type="radio" name="pick" id="pick"/>
                    <label htmlFor="pick">Pick - Up</label>
                </div>

                <div className="content-inputs">

                    <div className="container-inputs">
                        <label htmlFor="pickup-location">Locations</label>
                        
                        <div className="select-wrapper">
                            <select id="pickup-location" name="pickup-location">
                                <option value="Kota Semarang">Kota Semarang</option>
                            </select>
                            <FiChevronDown className='icon'/>
                        </div>

                    </div>

                    <div className="container-inputs">
                        <label htmlFor="pickup-time">Time</label>

                        <div className="select-wrapper">
                            <input type="time" className="invisible-input" name='pickup-time' id="pickup-time" value="07:00"/>
                            <div className="custom-display" id="displayTime">
                                <span>07.00</span>
                                <FiChevronDown/>
                            </div>
                        </div>
                    </div>

                    <div className="container-inputs">
                        <label htmlFor="pickup-date">Date</label>

                        <div className="select-wrapper">
                            <input type="date" className="invisible-input" id="pickup-date" name='pickup-date' value="2022-07-20"/>
                            <div className="custom-display" id="displayDate">
                                <span>20 July 2022</span>
                                <FiChevronDown/>
                            </div>
                        </div>
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
                        <label htmlFor="dropoff-location">Locations</label>
                        <div className="select-wrapper">
                            <select id="dropoff-location" name="dropoff-location">
                                <option value="Kota Semarang">Kota Semarang</option>
                            </select>
                            <FiChevronDown className='icon'/>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className="container-inputs">
                        <label htmlFor="dropoff-time">Time</label>

                        <div className="select-wrapper">
                            <input type="time" className="invisible-input" name='dropoff-time' id="dropoff-time" value="07:00"/>
                            <div className="custom-display" id="displayTime">
                                <span>07.00</span>
                                <FiChevronDown/>
                            </div>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className="container-inputs">
                        <label htmlFor="dropoff-date">Date</label>

                        <div className="select-wrapper">
                            <input type="date" className="invisible-input" id="dropoff-date" name='dropoff-date' value="2022-07-20"/>
                            <div className="custom-display" id="displayDate">
                                <span>20 July 2022</span>
                                <FiChevronDown/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PickDrop