import Aside from "../../components/Aside";
import CatalogRecomendation from "../../components/CatalogRecomendation";
import Container from "../../components/Container";
import Pickup from "../../components/Pickup";
import '../../sass/pages/_Category.scss'

const Category = () => {
    return (
        <main className="category">
            <Aside/>
            <Container >
                {/* <Pickup /> */}
                <CatalogRecomendation/>
            </Container>
        </main>
        
    )
}

export default Category;