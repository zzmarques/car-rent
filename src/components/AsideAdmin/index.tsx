import { RiHome5Line } from "react-icons/ri";
import { PiCarSimpleBold, PiChatCenteredDots, PiSunDimLight, PiMoonLight } from "react-icons/pi";
import { TfiBarChart } from "react-icons/tfi";
import { LiaWalletSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import { TbSettings2, TbLogout2 } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";
import { HiOutlineBriefcase } from "react-icons/hi2";
import "../../sass/components/_AsideAdmin.scss";


const AsideAdmin = () => {
    return (
        <aside className="aside-admin">
            <nav className="navbar-admin">
                <section className="main-manu">
                    <span className="title">Main Menu</span>
                    <ul>
                        <li className="active-li"><RiHome5Line /> <span className="des">Dashboard</span></li>
                        <li><PiCarSimpleBold /> <span className="des">Car Rent</span></li>
                        <li><TfiBarChart /> <span className="des">Insight</span></li>
                        <li><LiaWalletSolid /> <span className="des">Reimburse</span></li>
                        <li><PiChatCenteredDots /> <span className="des">Inbox</span></li>
                        <li><LuCalendarDays /> <span className="des">Calender</span></li>
                    </ul>
                </section>

                <section className="preferences">
                    <span className="title">Preferences</span>
                    <ul>
                        <li><TbSettings2 /> <span className="des">Settings</span></li>
                        <li><CiCircleInfo /> <span className="des">Help & Center</span></li>
                        <li className="dark-mode">
                            <div className="content"><HiOutlineBriefcase /> <span className="des">Dark Mode</span></div> 
                            <div className="icons"><div className="active"><PiSunDimLight /></div> <div><PiMoonLight /></div></div>
                        </li>
                    </ul>
                </section>
            </nav>

            <div className="container-btn">
                <button className="btn-logout">
                    <TbLogout2 />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    )
}

export default AsideAdmin;