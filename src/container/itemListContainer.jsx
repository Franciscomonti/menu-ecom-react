import React from 'react'
import ItemCount from '../component/item-count/itemCount'


function itemListContainer({name}) {

    function onAdd(count){
        console.log(`cantidad de productos agregados al carrito: ${count}`)
    }
    return (
        <>
            <h2 style={styleGreeting}>Welcome <span style={styleGreeting_span}>{name}</span> to Easy to SHOP </h2>
            <ItemCount stock={6} initial={1} onAdd={onAdd}/>
        </>
    )
}



export default itemListContainer; 



const styleGreeting = {
    margin: "0px",
    width: "100%",
    textAlign: "center",
    
}

const styleGreeting_span = {
    color: "red",
}