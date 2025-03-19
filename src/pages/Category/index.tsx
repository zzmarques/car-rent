import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import CardRecomendation from "../../components/CardRecomendation";
import More from "../../components/More";
import Pickup from "../../components/Pickup";
import '../../sass/pages/_Category.scss'

const Category = () => {

    const [ wv, setWv ] = useState(false);
    
        useEffect(() => {
            const wv = innerWidth;
            wv < 1024 ? setWv(true) : setWv(false);
    } ,[]);

    return (
        <main className="category">
            <Aside/>
            <section className="contente-category">
                <Pickup HidenOrShowComponents={wv}/>
                <div className="container-cards">
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>
                    <CardRecomendation/>                    
                </div>

                <More/>
            </section>            
        </main>
        
    )
}

export default Category;