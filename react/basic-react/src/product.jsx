// import "./Product.css"
function Product({title,price,features}){  // u can default value price = 100 if there is no price pass in producttab it will give 100 its defau
    // console.log(feature);
    // const list = features.map((feature) => <li>{feature}</li>); // feature is passed as argument which is initialised in the li tag
    // let isDiscount = price > 30000 ? "5%" : "";
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ?"blue" :"" };
    return (
        <div class="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price:{price*2}</h5>
            {/* <ul>{ features.map((feature) => <li>{feature}</li>)}</ul> */}
            {isDiscount ? <p>"Discount of 5%"</p> : null}
            {/* {price > 30000 && <p>"Discount of 5%"</p> } */}
        </div>
    );
}
export default Product;