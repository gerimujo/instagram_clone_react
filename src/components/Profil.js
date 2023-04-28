import "./Profil.css";
import Settings from "./Settings.jpg";
import { useState, useEffect } from "react";
import Tefaqjanav from "./Tefaqjanav.jpg";
import Anash from "./Anash";
import AddHig from "./AddHig.jpg";
import Profiliimpostime from "./Profiliimpostime";
import Photodelete from "./Photodelete.jpg"
import Likebar from "./Likebar.jpg";
import Comment from "./Comment.jpg"
function Profil() {
  const [left, setLeft] = useState(0);
  const [fotoprofili, SetFotoprofili] = useState("");
  const [data, setData] = useState([]);
  const paraqitje = (d) => {
    setUsername(d["user"]);
    SetPosts(d["numripost"]);
    setFollowers(d["folloers"]);
    setFollowing(d["following"]);
    if (
      d["fotoprofili"].includes("product") &&
      d["fotoprofili"].includes("8000") == false
    ) {
      SetFotoprofili("http://localhost:8000/" + d["fotoprofili"]);
    } else {
      SetFotoprofili(d["fotoprofili"]);
    }

    setfotopostime(d["postimet"]);
    setCaption(d["caption"]);
  };

  useEffect(() => {
    if (left < 0) {
      setLeft(0);
    }
    var dd = [];
    fetch("http://localhost:8000/api/profilimarr")
      .then((r) => r.json())
      .then((d) => paraqitje(d));

      if(disdelte=="inline"){
        setZindex(30);
      }else if(disdelte=="none"){
        setZindex(5);
      }
  }, []);
  const shkomajtas = () => {
    if (left > 0) {
      setLeft(left - 870);
    }
  };
  const [story, SetStory] = useState([
    {
      img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      text: "Geriddddd",
    },
    {
      img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      text: "geriiiiiiii",
    },
  ]);

  const [fotopostime, setfotopostime] = useState([]);
  const [caption, setCaption] = useState("ktu ss");
  const [username, setUsername] = useState("");
  const [posts, SetPosts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
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
       <div  class="divprofil12" >
       <img class="imgprofilhap" src={fotoprofili}></img>
       </div>
    <div>
      <Anash  />
      <div class="profilcont">
       
       
        
        <div class="profilemrimban">
          <p class="usrnameprofil">{username}</p>
          <button
            onClick={() =>
              (window.location.href = "http://localhost:3000/editprofile")
            }
            class="rounded"
          >
            Edit profile
          </button>
          <button class="rounded">Ad tools</button>
          <img class="sett" src={Settings}></img>
        </div>

        <div class="storycont1">
          <div style={{ left: left, display:"none" }} class="storycontreal1">
            {story.map((m) => (
              <div class="story">
                <img src={m.img}></img>
                <p>{m.text}</p>
              </div>
            ))}
            <div class="story">
              <img src={AddHig}></img>
              <p style={{ marginLeft: 30 }}> New</p>
            </div>
          </div>
          <div class="next11" onClick={() => setLeft(left + 870)}>
            <div class="katror"></div>
          </div>
          <div class="next1" onClick={() => shkomajtas()}>
            <div class="katror1"></div>
          </div>
        </div>
        <div class="statisposhtfoll">
          <p>{posts + " posts"}</p>
          <p>{followers + " followers"}</p>
          <p>{following + " following"}</p>
        </div>
        <textarea id="textarea11" value={caption}></textarea>
        <img id="navbartefqaja" src={Tefaqjanav}></img>
        <div class="postimeprofiliim1">
          {fotopostime.map((m) => (
            <div    onClick={()=>clikOpe(m)}    >
            <Profiliimpostime
              class="elpostime"
              src={"http://localhost:8000/" + m.photo}
        
              onClick={()=>console.log("u shtyp nga femija")} 
            /></div>
          ))}
        </div>
      </div>
      </div>
      <div  onClick={()=>goback1()}  style={{zIndex:zindex,display:disopenback}}  class="blackground"  >
        
      </div>
      <div style={{display:opentamam}} class="contimgopen"  >
        <div   class="contimgopen1"  >
        <img  style={{display:disimgopen}}  src={"http://localhost:8000/"+material}  ></img>
     <video  style={{display:disvideoopen}} controls  src={"http://localhost:8000/"+material}  ></video>
        </div>
        <div class="photoopentext" >
          <div class="openphototext1"  >
          <img  src={fotoprofili}  ></img>
        <p style={{fontWeight:500}} >{username}</p>
       <img  onClick={()=>activatedelte()}  src={Photodelete} id="pikadelet" ></img>
          </div>
          <div class="textphotopen3"  >
          <img src={fotoprofili}  ></img>
        <p style={{fontWeight:500}}  >{username}</p>
        <p>{caption1}</p>

          </div>
        
          <img style={{marginTop:340}}  id="likebar1" src={Likebar} ></img>
          <img id="likebar1"  src={Comment} ></img>
        </div>
      </div>
      <div class="rounded"  style={{display:disdelte}}  id="deleteplace" >
        <div  onClick={()=>deltepost()} ><p style={{color:"red"}}  >Delete</p></div>
        <div><p>Edit</p></div>
        <div><p>Hide like count</p></div>
        <div><p>Turn off commenting</p></div>
        <div><p>Go to post</p></div>
        <div><p>Cancel</p></div>
        
      </div>
    </div>
  );
}
export default Profil;
