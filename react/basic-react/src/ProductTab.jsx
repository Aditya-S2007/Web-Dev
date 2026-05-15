import Product from "./product";
function ProductTab (){
    let options = ["hi-tech","durable", "fast"];  
    //[ <li> "hi-tech"</li>, <li> "durable" </li> ,<li> "fast" </li> ]; this is second method for array render
    return(
    <>
    <Product title="phone" price={12345678} features={options} />   {/* feature={ ["hi-tech", "durable", "fast"]}  */}
    <Product title="phone2" price={12345678} features={options}/>
    <Product title="phone3" price={123} features={options}/>
    </>
    );
}

export default ProductTab;