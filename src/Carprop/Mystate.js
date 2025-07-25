import { useState } from "react";
const Mystate=()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}
export default Mystate