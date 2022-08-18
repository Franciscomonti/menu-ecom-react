import React from 'react'

function greeting({name}) {
    return (
        <h2 style={styleGreeting}>Welcome <span style={styleGreeting_span}>{name}</span> to Easy to SHOP </h2>
    )
}

export default greeting

const styleGreeting = {
    margin: "0px",
    width: "100%",
    textAlign: "center",
    
}

const styleGreeting_span = {
    color: "red",
}