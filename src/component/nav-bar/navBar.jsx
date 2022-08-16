import React from 'react';


const NavBar = () => {
    return (
        <div>
        <nav style={style_navBar}>
            <div style={style_navLogo}><img src={'/img/logo.png'} alt="logo" style={style_navLogo_Img}/></div>
            <ul style={style_nav_blq_btn}>
                <li style={style_nav_blq_btn_li}>Home</li>
                <li style={style_nav_blq_btn_li}>Products</li>
                <li style={style_nav_blq_btn_li}>About</li>
                <li style={style_nav_blq_btn_li}>Contact</li>
            </ul>
            <div style={style_nav_cart}>
                <img src= {'/img/cart vacio.svg'} alt="icon-cart-vacio" style={style_nav_cart_img}/>
            </div>
        </nav>
            
        </div>
    );
}

export default NavBar;


// Estilos del componente

const style_navBar = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "80px",
    justifyContent: "space-around",
    position: "fixed",
}

const style_navLogo = {
        width: "80px",
        height: "80px",
}

const style_navLogo_Img = {
        height: "80px",
        width: "150px",
        objectFit: "cover",
}

const style_nav_blq_btn = {
    display: "flex",
    height: "80px",
    alignItems: "center",
}

const style_nav_blq_btn_li = {
    listStyle: "none",
    margin: "0px 50px",
    padding: "5px 10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px",
    color: "black",
    cursor: "pointer",                   
}

const style_nav_cart = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
}

const style_nav_cart_img = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
}