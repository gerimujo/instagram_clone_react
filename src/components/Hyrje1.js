import Hyrje from "./Hyrje.jpg";
import "./Hyrje1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from "react";

function Hyrje1() {
    const [email, setEmail] = useState("");
    const [name, SetName] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [type, setType]= useState("password");

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
  if(user.length>3&&xmail==="none"&&xname==="none"&&xuser==="none"&&xpass==="none"){
    setNgjyra("#0095F6");
  }else {
    setNgjyra("#85c5f0");
  }
})
 const rregistro = (e)=>{
  if(ngjra==="#0095F6"){
e.preventDefault();
const data =  new FormData();
data.append("email",email);
data.append("name", name);
data.append("user", user);
data.append("pass", pass);
fetch("http://localhost:8000/api/rregg",{
  method:"POST",
  body:data,
  
})
//console.log("te dhenat u cuan" + email+"  "+name+"  "+"   "+user+"   "+pass )
.then(r=>r.json())
.then((d)=>{if(d['procces']=="done"){
  window.location.href= "http://localhost:3000/"
}else{
  console.log(d);
}})



  }

 }







  return (
    <div class="cont">
      <div>
        <img id="imghyrje" src={Hyrje}></img>
      </div>
      <div class="hyrje1">
        <img
          id="instagram"
          src="https://th.bing.com/th/id/OIP.1HXR94Waa3ori4bMK50TVAHaCS?pid=ImgDet&rs=1"
        ></img>
        <p id="sing">Sign up to see photos and videos from your friends</p>
        <div id="singwithfacebook" class="rounded">
          <p>Log in with Facebook</p>
        </div>
      <pre id="or"  >_______________     _______________</pre>
      <p id="or1" >OR</p>
      <form id="regfrom" >
      <input  type="text"  value={email} onBlur={mailheq}  onChange={(e)=>setEmail(e.target.value)}  placeholder="  Mobile Number or Email"  ></input>
      <input  type="text" value={name}  onBlur={nameheq}  onChange={(e)=>SetName(e.target.value)}      placeholder="  Full Name"  ></input>
      <input  type="text" value={user}  onBlur={userheq}  onChange={(e)=>setUser(e.target.value)}  placeholder="  Username"  ></input>
      <input  type={type}  value={pass} onBlur={passheq} onChange={(e)=>setPass(e.target.value)}  placeholder="  Password"  ></input>
      </form>
      <p class="regbottom" >People who use our service may have uploaded
       your contact information to Instagram.<pre>Learn More</pre></p>
     <p class="bysingup"  >By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
     <button style={{background:ngjra}} onClick={(e)=>rregistro(e)}  class="sigupp" >Sign up</button>
     <div style={{display:xmail}}   class="X" id="X11" ><p  class="x1" >X</p></div>
     <div  style={{display:xname}} class="X" id="X12" ><p  class="x1" >X</p></div>
     <div style={{display:xuser}} class="X" id="X13" ><p  class="x1" >X</p></div>
     <div style={{display:xpass}} class="X" id="X14" ><p  class="x1" >X</p></div>
     <p onClick={()=>setType(type==="password"?"text":"password")} id="Sow" >{type==="password"?"Show":"Hide"}</p>
    <br></br>
    <br></br>
     <div class="logininst"  >Have an account1?<p>Log in</p></div>
      </div>
    </div>
  );
}
export default Hyrje1;
