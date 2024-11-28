import { FaHome } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { MdMovieFilter } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

export const navigation = [
    {
        lable : "Tv Shows",
        href : 'tv',
        icon : <FaTv />
    },
    {
        lable : "Movies",
        href : "movie",
        icon : <MdMovieFilter />
    }
]

export const mobileNavigation =[
    {
        lable : "Home",
        href : "/",
        icon : <FaHome />
    },
    ...navigation,
    {
        lable : "search",
        href : "/search",
        icon : <IoSearchSharp />
    }
]