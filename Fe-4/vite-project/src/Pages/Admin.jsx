import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Admin.scss"
function Admin() {
    const [Category, setCategory] = useState([])
    const [Search, setSearch] = useState("")
    useEffect(() => {
      GetProduct()
    }, [])
   async function GetProduct() {
        const res= await fetch ('http://localhost:3000/news')
        const data= await res.json()
        setCategory(data)
    }
   async function DeleteProduct(id) {
    const res= await fetch ('http://localhost:3000/news/'+id,{method:"Delete"})
    GetProduct()
    }
    function Sorted() {
       setCategory(Category.toSorted((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))) 
    }
    function SortedPrice() {
        setCategory(Category.toSorted((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))) 
    }
  return (
    <>
     <input value={Search} onChange={(e)=>setSearch(e.target.value)}/>
     <button onClick={()=>Sorted()}>A-z</button>
     <button onClick={()=>SortedPrice()}>Price</button>
    <table>
    <thead>
  <tr>
  <th>id</th>
    <th>name</th>
    <th>description</th>
    <th>price</th>
    <th>delete</th>
    <th>update</th>
  </tr>
  </thead>
  <tbody>
    {Category.filter((x)=>x.name.toLowerCase().includes(Search.toLowerCase()))
    .map((x)=><>
        <tr>
    <td>{x._id}</td>
    <td>{x.name}</td>
    <td>{x.des}</td>
    <td>{x.price}</td>
    <td><button onClick={()=>DeleteProduct(x._id)}>Delete</button></td>
  </tr>
    </>)}
    </tbody> 
    </table></>
  )
}

export default Admin