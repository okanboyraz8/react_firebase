import React from 'react'
import '../styles/components/Navbar.css'
import images from '../images/images.js'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const Navbar = () => {

    const logoutFunc = async() => {
        toast.success('Situation: Exit Processing...')
        await signOut(auth)
        setTimeout(() => {
            window.location = "/"
        }, 5000);
        //window.location = "/"
    }
    
  return (
    <div className='navbar'>
        <div className='navbar-x'>
            <img className='navbar-left-img' src={images.firebase} alt="" />
            <div className='navbar-left'>FIREBASE</div>
        </div>
        <div onClick={logoutFunc} className='navbar-right'>Logout</div>
    </div>
  )
}

export default Navbar