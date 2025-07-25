import { useState } from "react";
let count=0
const Mywsa=()=>{
    const increment=()=>{
        count+=1;
        console.log(count);
    }
    const decrement=()=>{
        count-=1;
        console.log(count);
    }
    return(
        <div>
            <button onClick={increment}>increment</button>
            <span>{count}</span>
            <button onClick={increment}>increment</button>
        </div>
    )
}
export default Mywsa