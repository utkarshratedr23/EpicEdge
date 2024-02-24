import React, { useState } from 'react'
import { FaSearch, FaShoppingBag, FaUser,FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const user={_id:"gdfg",role:"admin"};
const Header = () => {
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const logoutHandler=()=>{
        setIsOpen(false);
    }
  return (
    <nav className='header'>
        <div>
        <h1 > EpIc EdGe </h1>
        </div>
        <div className='links'>
        <Link onClick={()=>setIsOpen(false)} to={"/"}>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to={"/search"}><FaSearch/></Link>
        <Link onClick={()=>setIsOpen(false)} to={"/cart"}><FaShoppingBag/></Link>
      {user?._id?(
        <>
        <button onClick={()=> setIsOpen((prev)=>!prev)}>
            <FaUser/>
        </button>
        <dialog open={isOpen}>
            {user.role==="admin" && (
                <Link onClick={()=>setIsOpen(false)} to="/admin/dashboard"> Admin </Link>
            )}
            <Link onClick={()=>setIsOpen(false)} to="/orders">Orders</Link>
            <button onClick={logoutHandler}>
                <FaSignOutAlt/>
            </button>
        </dialog>
        </>
      ):(
        <Link to={"/login"}> Login </Link>
      )}
      </div>
    </nav>
  )
}

export default Header