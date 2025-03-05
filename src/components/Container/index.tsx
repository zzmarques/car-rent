import { ReactNode } from "react";
import "../../sass/components/_Container.scss"

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <main className="container">
            { children }
        </main>
    )
}

export default Container;