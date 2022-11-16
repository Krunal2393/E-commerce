import React from "react";
import "./Homepage.css";
import { useStateContext } from "../../Context/Cart/CartContext";

function Homepage() {
  const { Allproducts, setProductdata, inc, setInc } = useStateContext();

  const handleclick = (ele) => {
    setInc(inc + 1  );
    setProductdata((oldItems) => [...oldItems,ele]);
  };
  
 
  

  return Allproducts.map((ele) => (        
    <div className="containers">
      <div className="card_a">
        <img src={ele.img} width={272} height={272} />

        <p>{ele.Title}</p>
        <p>{ele.Prize}</p>

        <button
          type="submit"
          onClick={() => handleclick(ele)}
          className="btn btn-danger danger">
          ADD TO CART
        </button>
      
        <p>{ele.quantity}</p>
      </div>
    </div>
  ));
}
export default Homepage;



