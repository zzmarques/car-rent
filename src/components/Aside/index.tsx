// import { useEffect, useState } from "react";
import "../../sass/components/_Aside.scss"

const Aside = () => {

    // const [ wv, setWv ] = useState(false);

    // useEffect(() => {
    //     const wv = innerWidth;
    //     wv < 1024 ? setWv(true) : setWv(false);
    // } ,[]);

    return (
        <aside className="container-aside ">
            <section className="content-aside">
                <span className="title-aside">type</span>

                <div className="container-options">
                    <div className="container-forms">
                        <input type="checkbox" name="sport" id="sport"/>
                        <label>Sport <span>(10)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="suv" id="suv"/>
                        <label htmlFor="suv">SUV <span>(12)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="mpv" id="mpv"/>
                        <label htmlFor="mpv">MPV <span>(16)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="sedan" id="sedan"/>
                        <label htmlFor="sedan">Sedan <span>(20)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="coupe" id="coupe"/>
                        <label htmlFor="coupe">Coupe <span>(14)</span></label>
                    </div>
                    
                    <div className="container-forms">
                        <input type="checkbox" name="hatchback" id="hatchback"/>
                        <label htmlFor="hatchback">Hatchback <span>(14)</span></label>
                    </div>

                </div>
            </section>

            <section className="content-aside">
                <span className="title-aside">capacity</span>
                <div className="container-options">

                    <div className="container-forms">
                        <input type="checkbox" name="qnt-2" id="qnt-2" />
                        <label htmlFor="qnt-2">2 Person <span>(10)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="qnt-4" id="qnt-4" />
                        <label htmlFor="qnt-4">4 Person <span>(14)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="qnt-6" id="qnt-6" />
                        <label htmlFor="qnt-6">6 Person <span>(12)</span></label>
                    </div>

                    <div className="container-forms">
                        <input type="checkbox" name="qnt-8" id="qnt-8" />
                        <label htmlFor="qnt-8">8 Person <span>(16)</span></label>
                    </div>
                </div>
            </section>

            <section className="content-aside">
                <span className="title-aside">price</span>

                <div className="container-options">
                    <div className="container-forms container-price">
                        <input type="range" name="price" id="price" />
                        <span className="max-price">Max. $100.00</span>
                    </div>
                </div>
                
            </section>
        </aside>
    )
}

export default Aside;