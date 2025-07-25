import { useState } from "react";
const Mystate2=()=>{
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={increment}>increment</button>
            <span>{count}</span>
            <button onClick={increment}>increment</button>
        </div>
    )
}
export default Mystate2