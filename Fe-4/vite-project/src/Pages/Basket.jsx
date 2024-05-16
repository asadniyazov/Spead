import React, { useContext } from 'react'
import { Maincontext } from '../context/Mainprovider'

function Basket() {
    const {Basket,IncreaseBasket, DecreaseBasket,RemoveBasket} = useContext(Maincontext)
  return (
<>
    <div>
        {Basket.map((x)=><>
            <div style={{border:"1px solid black"}} key={x._id}>
                <div>{x.name}</div>
                <div>{x.des}</div>
                <div>{x.price}</div>
                <div>{x.count}</div>
                <button onClick={()=>IncreaseBasket(x)}>+</button>
                <button onClick={()=>RemoveBasket(x)}>X</button>
                <button onClick={()=> DecreaseBasket(x)}>-</button>
            </div>
        </>)}
    </div>
</>
  )
}

export default Basket