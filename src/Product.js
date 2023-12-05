function Product(props)
{
    //console.log(props)
    return(
        <div className="product">
            <img className='img' src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            

        </div>
    )
}

export default Product;