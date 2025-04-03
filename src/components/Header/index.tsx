import Search from "../Search";
import BtnCategory from "../BtnCategory";
import Navbar from '../Navbar';
import '../../sass/components/_Header.scss';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import { PropsHidenOrShow } from "../../types/propsReatcNode";
import AsideAdmin from "../AsideAdmin";
// import Aside from "../Aside";


const Header:  React.FC<PropsHidenOrShow> = ({ HidenOrShowComponents } ) => {
        

    return (
        
        <header className={HidenOrShowComponents ? 'header-category' : 'header'}>
            <div className='container-header'>

                {HidenOrShowComponents ? (
                    <div className="content-header-category">
                        <div className="btn-hamb">
                            <FiMenu />
                        </div>
                        <div className="btn-close">
                        <   IoMdClose />
                        </div>
                        {/* <Aside/> */}
                        <AsideAdmin/>
                        <div className='logo'>
                            <h1>morent</h1>
                        </div>

                        <div className='form-desktop'>
                            <Search/>

                            <BtnCategory/>
                        </div>
                    </div>
                ) : (
                    <div className="content-header">
                    <div className='logo'>
                        <h1>morent</h1>
                    </div>

                    <div className='form-desktop'>
                        <Search/>

                        <BtnCategory/>
                    </div>
                    </div>
                )}
                
                <Navbar/>
            </div>
                

            <div className='form-container'>
                <Search/>

                <BtnCategory/>
            </div>
        </header>
    )
}

export default Header;