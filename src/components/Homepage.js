import Anash from "./Anash";
import Story from "./Story";
import Post from "./Post";
import{useState, useEffect} from "react";

function Homepage() {

  const [img, setImg] = useState("");
  const [post, setPost] = useState([]);
  const [dis, setdis] = useState("none");
  const prosec = (d)=>{
    setImg(d['profil']);
    if(d.hasOwnProperty("post")&&d['post'].length>0){
      setPost(d['post']);
    }
  console.log("fotoja e profilit 2 "+ d['profil']);
    


  }


  useEffect(()=>{
    fetch("http://localhost:8000/api/hompag")
    .then(r=>r.json())
    .then(d=>(prosec(d)))
  },[])



  
  return (
    <div>
      <Anash img={img} />
      <Story></Story>
      <div
        style={{ position: "absolute", left: 220, top: 170 }}
        id="contposthomepage"
      >
        {post.map((m,i)=>(<Post  value={m}  />))}
     
      </div>
    </div>
  );
}
export default Homepage;
