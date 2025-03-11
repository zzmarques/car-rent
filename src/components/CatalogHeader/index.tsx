import '../../sass/components/_CatalogHeader.scss'
import PropsReatcNode from '../../types/propsReatcNode';

const CatalogHeader = ({ children }: PropsReatcNode) => {
    return (
        <div className="cabecalho">
            { children }
        </div>
    )
}

export default CatalogHeader;