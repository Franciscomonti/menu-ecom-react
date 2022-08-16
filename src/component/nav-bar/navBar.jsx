import React from 'react';


const NavBar = () => {
    return (
        <div>
        <nav style={style_navBar}>
            <div style={style_navLogo}><img src={'/img/logo.png'} alt="logo" style={style_navLogo_Img}/></div>
            <ul style={style_nav_blq_btn}>
                <li style={style_nav_blq_btn_li}><a href="#" style={style_nav_blq_btn_a}>Home</a></li>
                <li style={style_nav_blq_btn_li}><a href="#" style={style_nav_blq_btn_a}>Products</a></li>
                <li style={style_nav_blq_btn_li}><a href="#" style={style_nav_blq_btn_a}>About</a></li>
                <li style={style_nav_blq_btn_li}><a href="#" style={style_nav_blq_btn_a}>Contact</a></li>
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
}

const style_nav_blq_btn_a = {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px",
    textDecoration: "none",
    color: "black",
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