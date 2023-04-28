import Anash from "./Anash";
import Profiliimpostime from "./Profiliimpostime";
import "./Exp.css";
import Likebar from "./Likebar.jpg";
import Comment from "./Comment.jpg"
import {useState, useEffect} from "react";

function Explore() {
const [fotopostime, setfotopostime] = useState([]);
const [fotoprofili, SetFotoprofili] = useState("");
const [username, setUsername] = useState("");

useEffect(()=>{
    fetch("http://localhost:8000/api/explore")
    .then(r=>r.json())
    .then(d=>setfotopostime(d));
},[])

const [zindex, setZindex] = useState(5);
  const [disopenback, setDisopenback] = useState("none");
  const [opentamam, setOpentamam] = useState("none");
  const [disimgopen, setimgopen] = useState("none");
  const [disvideoopen, setvideoopen] = useState("none");
  const [material, setMaterial] = useState("");
  const [caption1, setCaption1] = useState("");
  const [disdelte, setDisdele] = useState("none");
  const [idposthap, setPosthap] = useState("");
  
  const clikOpe = (c)=>{
    SetFotoprofili(c.profil);
    setUsername(c.user);
    console.log("open funksionon");
    setMaterial(c.photo)
    if(c.photo.includes("mp4")==true){
      setvideoopen("inline");
      setimgopen("none");
    }else{
      setvideoopen("none");
      setimgopen("inline");
  
    }
    setDisopenback("inline");
    setOpentamam("flex");
    setCaption1(c.caption);
    setPosthap(c.idpost);
   
  }
  const goback1 = ()=>{
    setDisopenback("none");
    setOpentamam("none");
    setvideoopen("none");
    setimgopen("none");
    setDisdele("none");
    setZindex(5);
  
  
  }
  const activatedelte =()=>{
    setDisdele("inline");
    setZindex(30)
  
  }
  const deltepost = ()=>{
    const data =  new FormData();
    data.append("id",idposthap);
    fetch("http://localhost:8000/api/deletepost1",{
      method:"POST",
      body:data,
    })
    .then(r=>r.json())
    .then(d=>{if(d['proces']=="done"){
      window.location.href=window.location.href;
    }})
  }




  return (
    <div>
    <div>
      <Anash />
      <div class="contexp">
        <div class="postcontex">
        
        </div>
        <div class="postimeprofiliim">
       {fotopostime.map((m) => (
         <div    onClick={()=>clikOpe(m)}    >
            <Profiliimpostime
              class="elpostime"
              src={"http://localhost:8000/" + m.photo}
            ></Profiliimpostime>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div
        onClick={() => goback1()}
        style={{ zIndex: zindex, display: disopenback }}
        class="blackground"
      ></div>
      <div style={{ display: opentamam }} class="contimgopen">
        <div class="contimgopen1">
          <img
            style={{ display: disimgopen }}
            src={"http://localhost:8000/" + material}
          ></img>
          <video
            style={{ display: disvideoopen }}
            controls
            src={"http://localhost:8000/" + material}
          ></video>
        </div>
        <div class="photoopentext">
          <div class="openphototext1">
            <img src={fotoprofili}></img>
            <p style={{ fontWeight: 500 }}>{username}</p>
            
          </div>
          <div class="textphotopen3">
            <img src={fotoprofili}></img>
            <p style={{ fontWeight: 500 }}>{username}</p>
            <p>{caption1}</p>
          </div>

          <img style={{ marginTop: 340 }} id="likebar1" src={Likebar}></img>
          <img id="likebar1" src={Comment}></img>
        </div>
      </div>
      <div class="rounded" style={{ display: disdelte }} id="deleteplace">
        <div onClick={() => deltepost()}>
          <p style={{ color: "red" }}>Delete</p>
        </div>
        <div>
          <p>Edit</p>
        </div>
        <div>
          <p>Hide like count</p>
        </div>
        <div>
          <p>Turn off commenting</p>
        </div>
        <div>
          <p>Go to post</p>
        </div>
        <div>
          <p>Cancel</p>
        </div>
      </div>
    </div>
  );
}
export default Explore;
