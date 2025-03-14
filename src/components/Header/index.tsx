import Search from "../Search";
import BtnCategory from "../BtnCategory";
import Navbar from '../Navbar';
import '../../sass/components/_Header.scss';


const Header = () => {
    
    return (
        <header className='header'>
            <div className='container-header'>
                <div className="content-header">
                    <div className='logo'>
                        <h1>morent</h1>
                    </div>

                    <div className='form-desktop'>
                        <Search/>

                        <BtnCategory/>
                    </div>
                </div>
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