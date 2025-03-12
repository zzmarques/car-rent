import { BiSolidBell } from "react-icons/bi";
import { RiSettings4Fill } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
import img from '../../assets/imgs/Image.png';
import "../../sass/components/_Navbar.scss";

const Navbar = () => {
    return (
        <nav className='navbar'>
                <div className="fav">
                    <GoHeartFill/>
                </div>
                <div className="set">
                    <BiSolidBell />
                </div>
                <div className="not">
                    <RiSettings4Fill />
                </div>
                <div className='foto-perfil'>
                    <img src={img} alt="foto de perfil" />
                </div>
        </nav>
    )
}

export default Navbar;