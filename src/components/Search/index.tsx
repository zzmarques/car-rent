import { RiSearch2Line } from "react-icons/ri";
import '../../sass/components/_Search.scss';

const Search = () => {
    return (
        <div className="container-input">
            <label htmlFor="pes"><RiSearch2Line /></label>
            <input type="search" name="pes" id="pes" placeholder='Search something here'/>
        </div>
    )
}

export default Search;