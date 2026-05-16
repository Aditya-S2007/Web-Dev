import "./App.css" // to add the styling in the app 
import ProductTab from "./ProductTab.jsx";
import Title from "./Title.jsx";
// import Product from "./product.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
      <>
        <MsgBox userName="Aditya" textColor="red" />
        <ProductTab/>
        
      </> 
  ); 
}

export default App;
