import "./Anash.css";
import Home from "./Home.jpg";
import Search from "./Search.jpg";
import Explore from "./Explore.jpg";
import Reels from "./Reels.jpg";
import Message from "./Message.jpg";
import Likes from "./Likes.jpg";
import Post from "./Post.jpg";
import Profile from "./Profile.jpg";
import Bardh from "./Bardh.jpg"
import Menu from "./Menu.jpg";
import { useState, useEffect, useRef,memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dragphotos from "./Dragphotos.jpg";
import Back from "./Back.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

function Anash(props) {
  const [imgs, setImg] = useState("");
  const [logo, setLogo] = useState([
    { img: Home, click: "" },
    { img: Search, click: "" },
    { img: Explore, click: () => plus() },
    { img: Reels, click: "" },
    { img: Message, click: "" },
    { img: Likes, click: "" },
    { img: Post, click: () => Clickpost() },
    { img: Bardh, click: "" },
    { img: Menu, click: "" },
  ]);
  const [displayser11, setDisplaySer] = useState("none");
  const CaptionInput = memo(({ caption, setCaption }) => {
    return (
      <textarea
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        id="textarea1"
        maxLength={20}
      ></textarea>
    );
  });
  const plus = () => {
    setNum(num + 2);
    console.log(num);
  };
  const [num, setNum] = useState(0);

  const [file, setFile] = useState(null);
  const [display, setDisplay] = useState("none");
  const [display1, setDisplay1] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [display4, SetDispla4] = useState("none");
  const [display5, SetDisplay5] = useState("none");
  const [caption, setCaption] = useState("   ");
  const file2 = useRef(file);
  const donext = () => {
    setDisplay1("none");
    setDisplay3("inline");
    SetDispla4("none");
  };
  const change = (e) => {
    setFile(e.target.files[0]);
    setDisplay("none");
    setDisplay1("inline");
  };
  const backfunc = () => {
    setDisplay("inline");
    setDisplay1("none");
    setDisplay3("none");
   
    setFile("");
    file2.current.value = "";
  };
  const backfunc1 = () => {
    setDisplay("none");
    setDisplay1("inline");
    setDisplay3("none");
    
  };
  const goback3 = () => {
    setDisplay("none");
    setDisplay1("none");
    setDisplay3("none");
    SetDispla4("none");
    SetDisplay5("none");
  };

  const Clickpost = (i) => {
    console.log("i ja ehste " + i);
    if (i == 6) {
      console.log(imgs);
      setImg(imgs);
      SetDisplay5("inline");
      SetDispla4("inline");
      setDisplay("inline");
    } else if (i == 1) {
      setDisplaySer(displayser11 === "none" ? "inline" : "none");
    }else if(i==7){
      
    }else if(i==0){
      window.location.href= "http://localhost:3000/home"
    }else if(i==2){
      window.location.href= "http://localhost:3000/explore"
    }else if(i==4){
      window.location.href= "http://localhost:3000/inbox"
      
    }else if(i==8){
      setMenu(menu=="none"?"inline":"none");
    }
  };

  const [sercon, SetSercont] = useState("");
  const postoo = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", file);
    form.append("caption", caption);
    fetch("http://localhost:8000/api/postphoto", {
      body: form,
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data["procces"] == "done") {
          setDisplay("none");
          setDisplay1("none");
          setDisplay3("none");
          SetDispla4("none");
          SetDisplay5("none");
          window.location.href = window.location.href
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    fetch("http://localhost:8000/api/profiletmarr1")
    .then(r=>r.json())
    .then(d=>proces(d))
   
  },[])

  const [nam, setName] = useState("");

  const proces = (f)=>{
    SetRes(f['data']);
    if(f['img'].includes("products")&&(f['img'].includes("8000")==false)){
      setImg("http://localhost:8000/" +f['img']);
    }else {
      setImg(f['img']);
    }
    
  
  /*  const xx =  logo.filter((d,i)=>{if(i==7){
      return{img:f['img'], click:""}
    }else {
      return d
    }})*/
   // setLogo(xx);
   setName(f["name"])

  }

  const [resSer, SetRes] = useState([
    {
      profil:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      user: "gero.mujo12",
      emri: "geri",
    },
    {
      profil:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      user: "gerild",
      emri: "geri",
    },
    {
      profil:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      user: "greta",
      emri: "geri",
    },
  ]);

 const [listash, SetList2] = useState([]);
  const serarch = (e) => {
    SetSercont(e.target.value);
    
    if(resSer.length>0){
      var dd = resSer.filter((r) => {
        if (r.user.includes(e.target.value)) {
          return { ...r };
        }
      });
    }
    if(resSer.length>0&&(e.target.value.length>0)){
      SetList2(dd);
    }else{
      SetList2([]);
    }
    
    console.log(dd);
  };
  const insertpr = (m,e) =>{
    e.preventDefault();
    const data = new FormData();

    data.append("email",m.email);
    data.append("emri",m.emri);
    data.append("user",m.user);
    data.append("pass",m.pass);
    data.append("id",m.id);
    data.append("profil",m.profil);
    data.append("gjendje",m.gjendje);
    data.append("caption", m.caption);


    fetch("http://localhost:8000/api/profilin",{
      method:"POST",
      body:data,
    })
    .then(r=>r.json())
    .then((d)=>{if(d['proces']=="done"){
    window.location.href = d['link'];
     
    }})


  } 
  const [disimg1, setdisimg1] = useState("inline");
  const [disvideo1, setvd] = useState("none");

  const error = ()=>{
    setdisimg1("none");
    setvd("inline")


  } 
const [menu, setMenu] = useState("none");
const errorvideo = ()=>{
  setdisimg1("inline");
  setvd("none")
}  
  return (
    <div >
      <div class="anash">
        <img
          id="imglogo"
          onClick={() =>
            setDisplaySer(displayser11 === "none" ? "inline" : "none")
          }
          src="https://www.stanthonyshs.org/wp-content/uploads/2018/01/instagram-logo-black-transparent.png"
        ></img>
        
        <div class="navbarlogo">
          {logo.map((m, i) => (
            <img
              src={m.img}
              onClick={() => Clickpost(i)}
              className="imgnavbar"
            ></img>
          ))}
          
        </div>
        <img  id="pr11" onClick={()=>(window.location.href= "http://localhost:3000/profiliim")}  src={imgs}  ></img>
      </div>
      <div
        onClick={() => goback3()}
        style={{ display: display5 }}
        class="posthedh"
      ></div>
      <div class="rounded" style={{ display: display4 }} id="vendikuhedh">
        <div style={{ display: display }}>
          <div class="headerhedhpost">
            <p>Create new post</p>
          </div>
          <img src={Dragphotos} id="Dragphotos"></img>
          <input
            ref={file2}
            id="inputfile1"
            class="btn btn-primary"
            type="file"
            onChange={change}
          ></input>
        </div>
        <div style={{ display: display1 }}>
          <div class="header22">
            <img id="backimg" onClick={() => backfunc()} src={Back}></img>
            <p id="Crop">Crop</p>
            <p onClick={() => donext()} id="next">
              Next
            </p>
          </div>
          {file && <img id="imgpastaj"  style={{display:disimg1}} onError={()=>error()} src={URL.createObjectURL(file)} />}
          {file && <video id="imgpastaj" autoPlay style={{display:disvideo1}}  onError={()=>errorvideo()} controls src={URL.createObjectURL(file)} />}
        </div>
      </div>
      <div style={{ display: display3 }} id="hendhnrfund">
        <div class="nefundfooter">
          <img id="backimg" onClick={() => backfunc1()} src={Back}></img>
          <p class="createtefund1">Create new post</p>
          <p onClick={(e) => postoo(e)} class="Sharefund1">
            Share
          </p>
        </div>
        <div class="footterfund2">
          {file && (
            <img id="imgpastaj1"  style={{display:disimg1}}  alt="ska" src={URL.createObjectURL(file)} />
          )}
          {file && <video id="imgpastaj" autoPlay
           style={{display:disvideo1}} controls src={URL.createObjectURL(file)} />}
          <div class="postcaption1">
            <img
              id="captionprofilphoto"
              src={imgs}
            ></img>
            <p id="captionpostname">{nam}</p>
            <textarea
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        id="textarea1"
        maxLength={20}
      ></textarea>
          </div>
        </div>
      </div>
      <div class="rounded" style={{ display: displayser11 }} id="searchbox">
        <div class="searchboxheader">
          <p id="ser11">Search</p>
          <input
            value={sercon}
            onChange={serarch}
            class="rounded"
            id="searchbox111"
            type="text"
            placeholder="Search"
          ></input>
        </div>
        <div class="result1">
          {listash.map((m) => <div   onClick={(e)=>insertpr(m,e)}   style={{width:"400px",height:"53px", marginBottom:"5px"}} >
             <div class="result2">
               <img class="idresphotop" src={m.profil}></img>{" "}
               <h6 class="nameres">{m.user}</h6>
             </div>  <p class="resname1">{m.emri}</p>
             </div>)}
            
          
           
          
         
        </div>
      </div>
      <div style={{display:menu}} class="rounded"  id="logoutbar"  >
        <div class="logoutelement" onClick={()=>(window.location.href="http://localhost:3000/editprofile")}  ><p>Settings</p></div>
        <div class="logoutelement"  ><p>Your activity</p></div>
        <div class="logoutelement"  ><p>Saved</p></div>
        <div class="logoutelement"  ><p>Switch apperance</p></div>
        <div class="logoutelement"  ><p>Report a problem</p></div>
        <div class="logoutelement"  ><p>Switch accounts</p></div>
        <div class="logoutelement" onClick={()=>(window.location.href="http://localhost:3000/")}  ><p>Log out</p></div>


      </div>
    </div>
  );
}

export default Anash;
