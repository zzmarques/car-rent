import "../../sass/components/_CatalogPopular.scss";
import CardPopular from "../CardPopular";
import CatalogHeader from "../CatalogHeader";

const CatalogPopular = () => {
    return (
        <section className="container-popular">
            <CatalogHeader>
                <span>Popular Car</span>

                <a href="#"><span>View All</span></a>
            </CatalogHeader>
            <div className="container-wrapper">
                <div className="container-cards">
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                </div>
            </div>
        </section>
    )
}

export default CatalogPopular;