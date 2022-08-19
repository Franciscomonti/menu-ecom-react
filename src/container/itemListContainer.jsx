import React from 'react'

function itemListContainer({name}) {
    return (
        <h2 style={styleGreeting}>Welcome <span style={styleGreeting_span}>{name}</span> to Easy to SHOP </h2>
    )
}

export default itemListContainer

const styleGreeting = {
    margin: "0px",
    width: "100%",
    textAlign: "center",
    
}

const styleGreeting_span = {
    color: "red",
}