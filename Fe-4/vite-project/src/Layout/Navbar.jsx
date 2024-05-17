import React, { useContext ,useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { Maincontext } from '../context/Mainprovider'
function Navbar() {
    const {Basket,Wishlist} = useContext(Maincontext)
    const [IsHiddenBtn, setIsHiddenBtn] = useState(true)
    function HiddenBtn() {
        setIsHiddenBtn(!IsHiddenBtn)
    }
    return (
        <>
            <div className='Navbar'>
                <div  style={{color:"white",fontSize:"70px",border:"1px solid gray",height:"200px",alignItems:"center",maxWidth:"200px"}}>Plus <span style={{color:"yellow"}}>.</span></div>
                <div className='Navbar_ul_container' style={{display:"flex",justifyContent:"center",height:"200px"}}>
                <div className='Navbar_ul' >
                    <ul className='Navbar_list'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Restuarant</Link></li>
                        <li><Link to={"admin"}>Admin</Link></li>
                        <li><Link to={"add"}>Add</Link></li>
                        <li><Link to={"basket"}>Basket {Basket.length}</Link></li>
                        <li><Link to={"wishlist"}>Wishlist{Wishlist.length}</Link></li>
                    </ul>
                </div>
                  
                    <button className='Hidden_btn' onClick={()=>HiddenBtn()}><i class="fa-solid fa-bars"></i></button>
                 
                </div>
                <div className='Navbar_3' style={{height:"200px"}}>
                <div className='Navbar_3_1'>Regestretion</div>
                <div className='Navbar_3_2'>  652-345 3222 11</div>
                </div>
            </div>
                 <div className= {IsHiddenBtn ? "Hiden_ul" : "Hidden_ul active"} >
                    <ul className='Hidden_list'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Restuarant</Link></li>
                        <li><Link to={"admin"}>Admin</Link></li>
                        <li><Link to={"add"}>Add</Link></li>
                        <li><Link to={"basket"}>Basket {Basket.length}</Link></li>
                        <li><Link to={"wishlist"}>Wishlist{Wishlist.length}</Link></li>
                    </ul>
                </div>
        </>
    )
}

export default Navbar