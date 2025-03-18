
import CatalogHeader from "../CatalogHeader";
import "../../sass/components/_CatalogRecomendation.scss"
import CardRecomendation from "../CardRecomendation";
import More from "../More";

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