import React from "react";
const NamePropp=(props) => {
    const {name,model,price,colour}=props;
    return(
    <div>
      <p>CarName: {name}</p>
      <p>Model: {model}</p>
      <p>Price: {price}</p>
      <p>Colour: {colour}</p>
    </div>
    )
}
export default NamePropp;