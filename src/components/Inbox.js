import Anash from "./Anash";
import Sendmessage from "./Sendmessage.jpg";
import "./inbox.css";
import { useState, useEffect } from "react";
import Sendmess from "./Sendmess.jpg";
import Emojisend from "./Emojisend.jpg";
import Emojisend1 from "./Emojisend1.jpg";
import Sendmess2 from "./Sendmess2.jpg";
import Sendmessinbox from "./Sendmessinbox.jpg";
function Inbox() {
  const [listchat, setListChat] = useState([]);
  const focus = () => {
    setEmoji("none");
    setETxtdis("inline");
  };
  const lost = () => {
    setEmoji("inline");
    setETxtdis("none");
  };
  const [Emojisend11, setEmoji] = useState("inline");
  const [text, setETxtdis] = useState("none");
  const [inbox, setIbox] = useState([
    {
      text: "hi1111111111111111111111111111111111111111111111 ",
      who: "me",
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1680822326~exp=1680822926~hmac=e3a0915374dc04d03be2779f16ecef574a74ac3839570871d9769caf05dd59d4",
    },
    {
      text: "hi2222222222222222222222222222222222222222222222 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "hi2222222222222222222222222222222222222222222222 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "hi2222222222222222222222222222222222222222222222 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "hi2222222222222222222222222222222222222222222222 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1v33333 me",
      who: "me",
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1680822326~exp=1680822926~hmac=e3a0915374dc04d03be2779f16ecef574a74ac3839570871d9769caf05dd59d4",
    },
    {
      text: "hi4444444444444444444444444444444444444444444444 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "hi5555555555555555555555555555555555555555555555 me",
      who: "me",
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1680822326~exp=1680822926~hmac=e3a0915374dc04d03be2779f16ecef574a74ac3839570871d9769caf05dd59d4",
    },
    {
      text: "hi1111111111111111111111111111111111111111111111 ",
      who: "me",
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1680822326~exp=1680822926~hmac=e3a0915374dc04d03be2779f16ecef574a74ac3839570871d9769caf05dd59d4",
    },
    {
      text: "hi2222222222222222222222222222222222222222222222 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1mesele1v33333 me",
      who: "me",
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1680822326~exp=1680822926~hmac=e3a0915374dc04d03be2779f16ecef574a74ac3839570871d9769caf05dd59d4",
    },
    {
      text: "hi4444444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 op44444444444444444444444444444444444444444444 opp",
      who: "he",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      text: "hi5555555555555555555555555555555555555555555555 me",
      who: "me",
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=996&t=st=1680822326~exp=1680822926~hmac=e3a0915374dc04d03be2779f16ecef574a74ac3839570871d9769caf05dd59d4",
    },
  ]);
  const [mesazhettama, setmesahze] = useState([]);
const [kopje2chatlist, setkopje2chatlist] = useState([]);
const [listdipo, setListdispo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/chat1")
      .then((r) => r.json())
      .then((d) => {
        setListChat(d["chatlist"]);
        setmesahze(d["mesazhet"]);
        setkopje2chatlist(d["chatlist"]);
        sefotofrofiliun(d["img"]);
        setuserun(d["user"]);
        setnameun(d["name"]);
        setListdispo(d["dhena"]);
      });

    console.log(inbox);
  }, []);
  const [fotovhatopen, setphotovhatopen] = useState(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  );
  const [name, setName] = useState("Vhangename");
  const [ptoprofiliun, sefotofrofiliun] = useState("");
  const [userune, setuserun] = useState("");
  const [nameun, setnameun] = useState("");
  const [userai, setuserai] = useState("");

  const open = (m) => {
    
    setDisblack("none")
    setbar("none");
   
      setphotovhatopen(m.photo1);
    

    console.log("tani1" + m.photo1)
    setuserai(m.user1);
    setName(m.name1);
    const cc = mesazhettama.filter((v) => {
      if (
        (v.user == userune && v.user1 == m.user1) ||
        (v.user == m.user1 && v.user1 == userune)
      ) {
        return { v };
      }
    });
    setIbox(cc);
    console.log("foto  " + m.photo1);
    setdi123("none");
    setdisinbox123("inline");
  };
  const send = (e) => {
    console.log("mesaazhi u dergua");
    e.preventDefault();
    const data = new FormData();

    data.append("profil", ptoprofiliun);
    data.append("user", userune);
    data.append("name", nameun);
    data.append("mesazhi", text1);
    data.append("profil1", fotovhatopen);
    data.append("user1", userai);
    data.append("name1", name);
    data.append("kodi", inbox.length);
    fetch("http://localhost:8000/api/sendmessage1", {
      body: data,
      method: "POST",
    })
      .then((r) => r.json())
      .then((d) => {
        if (d["proces"] == "done"&&inbox.length==0) {
          window.location.href = window.location.href  
         
        }
      });

    setIbox([
      ...inbox,
      {
        photo: ptoprofiliun,
        user: userune,
        name: nameun,
        mesazhi: text1,
        profil1: fotovhatopen,
        user1: userai,
        name1: name,
        kodi: inbox.length,
      },
    ]);
    console.log(inbox);
    setText("");
  };
  const [text1, setText] = useState("");
  //setkopje2chatlist
  //kopje2chatlist
  const filter = (e)=>{
    setTExt3(e.target.value)
    const cc2 = listdipo.filter(m=>{if(m.user1.includes(text3)||m.name1.includes(text3)){
      return{...m}
    }})
    setkopje2chatlist(cc2);
    console.log(+kopje2chatlist)

  }
  const [text3, setTExt3] = useState("");
  const [displayblack, setDisblack] = useState("none");
  const [displaysearcbbar, setbar]  = useState("none");
  const [displayfaqjaepare, setdi123] = useState("inline");
  const [inboxdis123, setdisinbox123] = useState("none")


  const click1 = ()=>{
    setDisblack("inline")
    setbar("inline");

  }

  const goback5 = ()=>{
    setDisblack("none")
    setbar("none");


  }


  return (
    <div>
      <div>
        <Anash />
        <div class="contmadhinbox">
          <div id="continbox1" class="rounded">
            <div class="chatboxlist">
              <div class="sendmessageheaderuser">
                <p>{userune}</p>
                <img onClick={()=>click1()}  src={Sendmessage}></img>
              </div>
              <div class="messages12">
                {listchat.map((m) => (
                  <div onClick={() => open(m)} class="messagechatelement">
                    <img class="imgelemnet" src={m.photo1}></img>
                    <p>{m.name1}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:displayfaqjaepare }} class="inboxx">
              <img src={Sendmess}></img>
              <button  onClick={()=>click1()} class="btn btn-primary">Send Message</button>
            </div>
            <div  style={{display:inboxdis123}} class="messages">
              <div class="headersendmes1">
                <img id="senmesimgheader" src={fotovhatopen}></img>
                <p>{name}</p>
                <img src={Sendmess2} id="senmesimgheader1"></img>
              </div>
              <div class="messageplaceshow">
                {inbox.map((m, i) => (
                  <div class="messelecont">
                    {m.profil && (
                      <img
                        className="imgeleposht"
                        style={{
                          visibility:
                            m.name !== name || inbox[i + 1]?.name == name
                              ? "hidden"
                              : "visible",
                        }}
                        src={fotovhatopen}
                      ></img>
                    )}

                    <p
                      class="rounded"
                      id="mesele1"
                      style={{ marginLeft: m.name == name ? 8 : 270 }}
                    >
                      {m.mesazhi}
                    </p>
                  </div>
                ))}
              </div >
              <div  style={{backgroundColor:"white"}} >
              <div class="rounded" id="sendboxtype">
                <img src={Emojisend} id="img112"></img>
                <input
                  value={text1}
                  onChange={(e) => setText(e.target.value)}
                  onFocus={focus}
                  onBlur={lost}
                  placeholder="Message..."
                ></input>
                <div onClick={(e) => send(e)}>
                  <img
                    id="img45"
                    src={Emojisend1}
                    style={{ display: Emojisend11 }}
                  ></img>
                  <p style={{ display: text }}>Send</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:displayblack}} onClick={()=>goback5()} class="backg12"></div>
      <div class="rounded"  style={{display:displaysearcbbar}}  id="ops">
        <div onClick={()=>goback5()} class="sendmessinboxheader">
          <img src={Sendmessinbox}></img>
        </div>
        <div class="searchbarinbox" >
          <p>To:</p>
          <input value={text3} onChange={(e)=>filter(e)} placeholder="Search..." ></input>

        </div>
        <div>
        {kopje2chatlist.map((m) => (
                  <div onClick={() => open(m)} class="messagechatelement">
                    <img class="imgelemnet" src={m.photo1}></img>
                    <p>{m.name1}</p>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
}
export default Inbox;
