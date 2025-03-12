
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
        </section>
    )
}

export default CatalogRecomendation;