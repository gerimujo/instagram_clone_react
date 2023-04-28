import Hyrje from "./Hyrje.jpg";
import "./Hyrje2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from "react";

function Hyrje2() {
    const [email, setEmail] = useState("");
    const [name, SetName] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [type, setType]= useState("password");
    const [err, setErr] = useState("");

    const [xmail, setXmail]= useState("none");
    const [xname, setXname] = useState("none");
    const [xuser, setXuser] = useState("none");
    const [xpass, setXpass] =  useState("none");
  const [ngjra, setNgjyra] = useState("#85c5f0");
const mailheq = ()=>{
  if((email.includes("@")&&email.includes(".com"))||email.length===0){
    setXmail("none");

  }else {
    setXmail("flex");

  }
}
const nameheq = ()=>{
  if(name.length>3||name.length===0){
    setXname("none");
  }else{
    setXname("flex")
  }
}
const userheq = ()=>{
  if(user.length>3||user.length===0){
    setXuser("none")
  }else{
    setXuser("flex");
  }
}

const passheq = ()=>{
  
  if(pass.length>7||pass.length===0){
    setXpass("none")
  }else{
    setXpass("flex")
  }
}

useEffect(()=>{
  if(email.length>4&&pass.length>7){
    setNgjyra("#0095F6");
  }else {
    setNgjyra("#85c5f0");
  }
})
 const login = (e)=>{
  console.log("ktu funksionon");
  if(ngjra==="#0095F6"){
e.preventDefault();
const data =  new FormData();
data.append("email",email);
data.append("password",pass)
fetch("http://localhost:8000/api/hyrr",{
  method:"POST",
  body:data,
})
.then(r=>r.json())
.then((d)=>{if(d['procces']=="done"){
  window.location.href = "http://localhost:3000/home";
}else{
  setErr("There was a problem logging you into Instagram. Please try again soon.")
}})



  }

 }







  return (
    <div class="cont">
      <div>
        <img id="imghyrje" src={Hyrje}></img>
      </div>
      <div  style={{height:err.length===0?"459px":"500px"}}  class="hyrje2">
        <img
          id="instagram"
          src="https://th.bing.com/th/id/OIP.1HXR94Waa3ori4bMK50TVAHaCS?pid=ImgDet&rs=1"
        ></img>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
      <form  onSubmit={login} id="regfrom" >
      <input  type="text" name="email" value={email} onBlur={mailheq}  onChange={(e)=>setEmail(e.target.value)}  placeholder="  Phone number,username or email"  ></input>
      <input  type={type} name="password" value={pass} onBlur={passheq} onChange={(e)=>setPass(e.target.value)}  placeholder="  Password"  ></input>
      </form>
      <button  class="rounded"  style={{background:ngjra}} onClick={(e)=>login(e)} id="sigupp"   >Log in</button>
     
      <pre id="or3"  >_______________     _______________</pre>
      <p id="or4" >OR</p>
      <p id="loginwithfacebook"  >Log in with facebook</p>
     <p onClick={()=>setType(type==="password"?"text":"password")} id="Sow1" >{type==="password"?"Show":"Hide"}</p>
   <p id="err" >{err}</p>
     <p id="forgotpassword" >Forgot password ?</p>
    <br></br>
    <br></br>
     <div class="logininst"  >Don't have an account?<p onClick={()=>window.location.href="http://localhost:3000/reg1"}  >Sign up</p></div>
     
      </div>
    </div>
  );
}
export default Hyrje2;
