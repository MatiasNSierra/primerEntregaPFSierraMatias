const ItemDetail = ({ nombre, img, precio, descripcion, stock }) => {
    return (
        <>
       
         <li class="tarjetita">
      <h3>{nombre}</h3>
      <img src={img} alt={nombre}/>
       <p>Precio: ${precio}</p>
       <p>Cantidad: {stock} </p>
       <p>Descripcion: {descripcion}</p>
       
       

  </li>
        
        
        
        </>
    )
}

export default ItemDetail