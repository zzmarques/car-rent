
import CatalogHeader from "../CatalogHeader";
import "../../sass/components/_CatalogRecomendation.scss"
import CardRecomendation from "../CardRecomendation";

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

            <div className="container-more">
                <button className="btn-more">Show More Car</button>
                <span>120 Car</span>
            </div>
        </section>
    )
}

export default CatalogRecomendation;