import { BiSolidBell } from "react-icons/bi";
import { RiSettings4Fill } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
import img from '../../../public/img/profill1.png';
import "../../sass/components/_Navbar.scss";

const Navbar = () => {
    return (
        <nav className='navbar'>
                <div className="container-icons fav">
                    <GoHeartFill/>
                </div>
                <div className="container-icons not">
                    <BiSolidBell />
                </div>
                <div className="container-icons set">
                    <RiSettings4Fill />
                </div>
                <div className='foto-perfil'>
                    <img src={img} alt="foto de perfil" />
                </div>
        </nav>
    )
}

export default Navbar;