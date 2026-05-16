import Product from "./product";
function ProductTab (){
    // let options = ["hi-tech","durable", "fast"];  
    //[ <li> "hi-tech"</li>, <li> "durable" </li> ,<li> "fast" </li> ]; this is second method for array render
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        
    };
    return(
    <div style={styles}>
    <Product title="KZ EDX Pro 2 in-Ear Monitor IEM" idx="0"/>   {/* feature={ ["hi-tech", "durable", "fast"]}  */}
    <Product title="BenQ MX560C XGA Projector" idx="1" />
    <Product title="Samsung Galaxy S25 Ultra 5G AI Smartphone" idx="2"/>
    <Product  title="EF ECOFLOW DELTA 2 Portable Power Station" idx="3"/>
    </div>
    );
}

export default ProductTab;