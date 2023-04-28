import Settings from "./Settings.jpg";
import Anash from "./Anash";
import Private from "./Private.jpg"
import "./Profilprivat.css"
import { useState,useEffect } from "react";

function Profilprivat(){
const [data, setData] = useState([]);
const [user, setUser] = useState("");
const [text, setText] = useState("");
const [color, setColor] = useState("");
const [posts, setPosts] = useState("");
const [followers, setFollowers] = useState("");
const [following, setFollowing] = useState("");
const [caption, setcaption] = useState("");
  //const color = ["200, 200, 200","0, 149, 246"]
  const [img, setImg] = useState("");
  const process = (d)=>{
    setImg(d['img']);
    setUser(d['user']);
    setText(d['text']);
    setColor(d['color']);
    setPosts(d['posts']);
    setFollowers(d['followers']);
    setFollowing(d['following']);
    setcaption(d['caption']);
    console.log(d['caption']);


  }

  useEffect(()=>{
    fetch("http://localhost:8000/api/profilprivat")
    .then(r=>r.json())
    .then((d)=>process(d))

  },[])
  const press = (e) =>{
    e.preventDefault();
    const data =  new FormData();
    data.append("color",color);
    data.append("text",text);

    fetch("http://localhost:8000/api/profilprivep",{
      body:data,
      method:"POST",
    })
    .then((r)=>r.json())
    .then(d=>{if(d['proces']=="done"){
      window.location.href= window.location.href
    }else {
      console.log(d)
    }})
  
  }


    return(<div>
       <div  class="divprofil12" >
       <img class="imgprofilhap" src={img}></img>
       </div>
        <Anash/>
        <div>
         
        <div class="profilemrimban">
          <p class="usrnameprofil">{user}</p>
          <button onClick={(e)=>press(e)}  style={{backgroundColor:color, border:"0px black solid"}}    class="rounded">{text}</button>
          <div style={{marginLeft:"-400px"}}  class="statisposhtfoll">
          <p>{posts+" posts"}</p>
          <p>{ followers+" followers"}</p>
          <p>{ following+" following"}</p>
        </div>
         <br></br>
        </div>
        <textarea id="textarea11" value={caption}   ></textarea>
        <img class="private" src={Private} ></img>
        </div>
    </div> )


}
export default Profilprivat