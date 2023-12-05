import Product from "./Product";
function Products_list()
{
    return(
        <div  className='products_list'>
            
            <Product name="Levis Jeans" price="2000" url='https://levi.in/cdn/shop/files/A70870003_01_Front_3c11fde8-08e1-4aba-a226-d57d6f6ea2c7.jpg?v=1699256916&width=550'/>
            <Product name="Samsung M51" price="34000" url='https://rukminim2.flixcart.com/image/416/416/kfeamq80/mobile/y/s/f/samsung-galaxy-m51-sm-m515fzbd-original-imafvvgft9cgdrsz.jpeg?q=70'/>
            <Product name="Dell Monitor" price="50000" url='https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/monitors/s-series/s2721hn/s2721hn-cfp-00025lf095-gy.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500'/>
        
        </div>
    )
}
export default Products_list;