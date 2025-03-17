import CatalogPopular from "../../components/CatalogPopular";
import CatalogRecomendation from "../../components/CatalogRecomendation";
import Container from "../../components/Container";
import Pickup from "../../components/Pickup";
import { Slide } from "../../components/Slide";

const Home = () => {
    return (
        <>
        <Container>
            <Slide/>
            <Pickup/>
            <CatalogPopular/>
            <CatalogRecomendation/>
        </Container>
    </>
    )
}

export default Home;