import React, { createContext, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
 export const Maincontext=createContext()
function Mainprovider({children}) {
    const [Basket, setBasket] = useLocalStorage("basket",[])
  const [Wishlist, setWishlist] = useLocalStorage("wishlist",[])
    function AddBasket(item) {
        const index=Basket.findIndex((x)=>x._id===item._id)
        if (index===-1) {
            return setBasket([...Basket,{...item,count:1}])
        }
    }
    function IncreaseBasket(item) {
        const index=Basket.findIndex((x)=>x._id===item._id)
         const elment=Basket[index]
        if (index!==-1) {
            elment.count++
            return setBasket([...Basket])
        }
    }
    function DecreaseBasket(item) {
        const index=Basket.findIndex((x)=>x._id===item._id)
         const element=Basket[index]
        if (element.count>1) {
            element.count--
            return setBasket([...Basket])
        }
    }
    function RemoveBasket(item) {
         return setBasket([...Basket.filter((x)=>x._id!==item._id)])
    }
    function AddWishlist(item) {
        const index=Wishlist.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
            return setWishlist([...Wishlist.filter((x)=>x._id!==item._id)])
        }
        else{
            return setWishlist([...Wishlist,item])

        }
    }
   
   function Isexsisted(item) {
    return Wishlist.find((x)=>x._id===item._id)
   }
  return (
    <Maincontext.Provider value={{Basket,Wishlist,AddBasket,IncreaseBasket, DecreaseBasket,RemoveBasket,AddWishlist,Isexsisted}}> {children}</Maincontext.Provider>
  )
}

export default Mainprovider