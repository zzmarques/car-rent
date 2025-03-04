import { RiSearch2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import img from '../../assets/imgs/Image.png';
import '../../sass/components/_Header.scss';


const Header = () => {

    
    return (
        <header className='header'>
            <nav className='navbar'>
                <div className='logo'>
                    <h1>morent</h1>
                </div>

                <div className='foto-perfil'>
                    <img src={img} alt="foto de perfil" />
                </div>
            </nav>

            <div className='form-container'>
                <div className="container-input">
                    <label htmlFor="pes"><RiSearch2Line /></label>
                    <input type="search" name="pes" id="pes" placeholder='Search something here'/>
                </div>

                <div className='filter'>
                    <LuSettings2 />
                </div>
            </div>
        </header>
    )
}

export default Header;