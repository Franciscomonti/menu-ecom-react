import { useState, useEffect } from "react"

const Item = () => {

    const [productos, setProductos] = useState([])

    const productosCards = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatilla_nike');
            const data = await response.json();
            console.log("holaaaa")
            setProductos(data.results);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        productosCards()     
    }, []);

    return(
        <div >
        {productos.map((producto, index)=>{
            return (
                <div key={index}>
                    <h2>{producto.title}</h2>
                    <img src={producto.thumbnail} alt=""/>
                    <p>{producto.price}</p>
                </div>
            )
        })}
        </div>

);

}


export default Item