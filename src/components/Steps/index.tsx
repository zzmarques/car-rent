import '../../sass/components/_Steps.scss';
import { PropsReatcNode } from '../../types/propsReatcNode';


const Steps = ({ children }: PropsReatcNode) => {
    return (
        <section className="container-steps">
            { children }
        </section>
    )
}

export default Steps;