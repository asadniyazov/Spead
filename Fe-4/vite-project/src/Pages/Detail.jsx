import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Detail() {
    let {id}=useParams()
    const [Category, setCategory] = useState([])
    useEffect(() => {
     GetById()
    }, [])
   async function GetById() {
    const res= await fetch ('http://localhost:3000/news/'+id)
    const data= await res.json()
    setCategory(data)
    }
  return (
    <>
        <div>{Category.name}</div>
        <div>{Category.des}</div>
        <div>{Category.price}</div>
    </>
  )
}

export default Detail