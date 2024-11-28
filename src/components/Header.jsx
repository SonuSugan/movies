import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { navigation } from '../constants/navigation';





const Header = () => {

    const [searchInput,setSearchInput] = useState('');
    const navigate = useNavigate();




useEffect(()=>{
    if(searchInput){
        navigate(`/search?q=${searchInput}`)
    }

},[searchInput])

const handleSubmit = (e)=>{
e.preventDefault()
}

  return (
    
    <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-40'>
     <div className='container mx-auto px-2 flex items-center h-full'>
     <div className=''>
        <Link to={"/"} >MoviesDa...</Link>
     </div>
     <nav className='hidden lg:flex items-center gap-1 ml-5'>
     {
        navigation.map((nav,index) =>{
            return(
                <div>
                    <NavLink key={nav.lable} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                        {nav.lable}
                    </NavLink>
                </div>
            )
        })
     }
     </nav>
     <div className='ml-auto flex items-center gap-4'>
        <form className='flex items-center' onClick={handleSubmit}>
            <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" placeholder='search hear...' className=' bg-transparent px-4 py-4 outline-none border-none hidden lg:block'/>
            <button className='text-2xl text-white'>
            <IoSearchSharp />

            </button>
        </form>
        
        <div className='w-10 h-10 cursor-pointer active:scale-50 transition-all text-blue-400'>
        <FaCircleUser className='w-10 h-10 '/>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Header
