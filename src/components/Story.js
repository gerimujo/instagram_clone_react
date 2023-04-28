import "./Story.css"
import { useState, useEffect } from "react"

function Story(){
   const [left, setLeft] = useState(0);

useEffect(()=>{
    if(left<0){
        setLeft(0);
    }
})
const shkomajtas = ()=>{
    if(left>0){
        setLeft(left-650);
    }
}

    return(<div><div    class="storycont2"  >
        <div  style={{left:left}} class="storycontreal11" >
            <div  class="story" >
            <img  src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"  ></img>
<p>Story </p>
</div>
<div  class="story" >
<img  src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"  ></img>
<p>Story 1 </p>
</div>
        </div>
       <div class="next" onClick={()=>setLeft(left+650)} ><div class="katror"  ></div></div>
       <div class="next1" onClick={()=>shkomajtas()} ><div class="katror1"  ></div></div>
    </div></div>)

}
export default Story