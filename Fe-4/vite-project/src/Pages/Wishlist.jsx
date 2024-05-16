import React, { useContext } from 'react'
import { Maincontext } from '../context/Mainprovider'

function Wishlist() {
    const {Wishlist,AddWishlist,Isexsisted} = useContext(Maincontext)
  return (
    <>
        <div>
        {Wishlist.map((x)=><>
            <div style={{border:"1px solid black"}} key={x._id}>
            <div onClick={()=>AddWishlist(x)}>{Isexsisted(x) ?<i class="fa-solid fa-heart"></i>: <i class="fa-regular fa-heart"></i>}</div>
                <div>{x.name}</div>
                <div>{x.des}</div>
                <div>{x.price}</div>
                <div>{x.count}</div>
            </div>
        </>)}
    </div>
    </>
  )
}

export default Wishlist