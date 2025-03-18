import Aside from "../../components/Aside";
import CardRecomendation from "../../components/CardRecomendation";
import More from "../../components/More";
import Pickup from "../../components/Pickup";
import '../../sass/pages/_Category.scss'

const Category = () => {
    return (
        <main className="category">
            <Aside/>
            <section className="contente-category">
                <Pickup/>
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