import React from 'react';
import { useState } from 'react';



function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    const sumProductCount = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    }

    const restProductCount = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    }

  return (
    <div style={item_count}>
        <h2>Product</h2>
        <p>Description</p>
        <div style={item_count_blq}>
          <div style={item_count_btn_blq}>
              <button onClick={restProductCount} style={item_count_btn_blq_btn} >-</button>
                <span>{count}</span>
              <button onClick={sumProductCount} style={item_count_btn_blq_btn}  >+</button>
          </div>

          <button onClick={() => onAdd(count)}  style={item_count_btn_blq_add} >Add to Cart</button> 
        </div>
    </div>
  )
}

const item_count ={
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "500px",
  height: "100px",
  margin:"30px auto",
  padding: "10px",
  background: "#fafafa",
  boxShadow: "0 0 20px"
}

const item_count_blq = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const item_count_btn_blq = {
  margin:"10px",
  color: "red",
  display: "flex",
  alignItens: "center",
}

const item_count_btn_blq_btn ={
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  margin: "0px 10px",
  fontSize: "20px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  cursor: "pointer",
}

const item_count_btn_blq_add = {
  border: "none",
  borderRadius: "5px",
  height: "25px",
  margin: "0px 10px",
  fontSize: "20px",
  color: "blue",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  cursor: "pointer",
}



export default ItemCount