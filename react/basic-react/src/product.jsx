import "./Product.css"
import Price from "./Price";
function Product({title,price,features,idx }){  // u can default value price = 100 if there is no price pass in producttab it will give 100 its defau
   let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intuitive surface"],
        ["wireless", "optical orientation"],
    ];
    
    return (
      <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>  
    );
}
export default Product;



 // console.log(feature);
    // const list = features.map((feature) => <li>{feature}</li>); // feature is passed as argument which is initialised in the li tag
    // let isDiscount = price > 30000 ? "5%" : "";
    // let isDiscount = price > 30000;
    // let styles = { backgroundColor: isDiscount ?"blue" :"" };
    //return
// {/* <div class="Product" style={styles}> */}
            // <h3>{title}</h3>
            // <h5>Price:{price*2}</h5>
            // {/* <ul>{ features.map((feature) => <li>{feature}</li>)}</ul> */}
            // {isDiscount ? <p>"Discount of 5%"</p> : null}
            // {/* {price > 30000 && <p>"Discount of 5%"</p> } */}
        // </div>