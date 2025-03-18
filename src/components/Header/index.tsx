import Search from "../Search";
import BtnCategory from "../BtnCategory";
import Navbar from '../Navbar';
import '../../sass/components/_Header.scss';
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
    showHamburger: boolean;
}

const Header:  React.FC<NavbarProps> = ({ showHamburger } ) => {
        

    return (
        
        <header className={showHamburger ? 'header-category' : 'header'}>
            <div className='container-header'>

                {showHamburger ? (
                    <div className="header-category">
                        <div className="btn-hamb">
                            <FiMenu />
                        </div>
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