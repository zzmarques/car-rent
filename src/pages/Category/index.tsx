import Aside from "../../components/Aside";
import CatalogRecomendation from "../../components/CatalogRecomendation";
import Container from "../../components/Container";
import '../../sass/pages/_Category.scss'

const Category = () => {
    return (
        <main className="category">
            <Aside/>
            <Container >
                <CatalogRecomendation/>
            </Container>
        </main>
        
    )
}

export default Category;