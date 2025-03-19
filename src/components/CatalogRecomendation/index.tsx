
import CatalogHeader from "../CatalogHeader";
import CardRecomendation from "../CardRecomendation";
import More from "../More";
import "../../sass/components/_CatalogRecomendation.scss"


const CatalogRecomendation = () => {
    return (
        <section className="catalog-recomendation">
            
            <CatalogHeader>
                <span>Recomendation Car</span>
            </CatalogHeader>

            <div className="container-card-rec">
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
    )
}

export default CatalogRecomendation;