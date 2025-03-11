
import "../../sass/components/_Container.scss"
import PropsReatcNode from "../../types/propsReatcNode";

const Container = ({ children }: PropsReatcNode) => {
    return (
        <main className="container">
            { children }
        </main>
    )
}

export default Container;