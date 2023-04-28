import "./Post.css";
import Likebar from "./Likebar.jpg";
import { useEffect, useState } from "react";
import Story from "./Story";
function Post(props) {
  const [link, setLink] = useState(
    props.value
  );
  const [imgdis, setImgDis] = useState("inline");
  const [videodis, setVideoDis] = useState("inline");
  const [dist, setDist] = useState("inline");
  useEffect(() => {
    console.log("idpost   "+props.value['idpost']);
   const dd1 =  props.value['photo'];
  // if(props.value&&props.value.length>0){
     if (dd1 && dd1.includes("mp4")) {
        setVideoDis("inline");
        setImgDis("none");
      } else if(dd1 && dd1.includes("mp4")==false) {
        setImgDis("inline");
        setVideoDis("none");
      }else {
        setDist("none")

      }

      /*if(dd1 && dd1.length==0){
        setImgDis("none");
        setVideoDis("none");
      }*/
   // }
  
   
  },[]);

  return (
   
    
    <div  style={{display:dist}}  class="post1">
      <div class="postheader">
        <img
          class="profilpostfoto"
          src={props.value['profil'].includes("product")?props.value['profil']: "http://localhost:8000/"+props.value['profil']}
        ></img>
        <p class="postheadername">{props.value['user']}</p>
      </div>
      <div class="permbajtjapost">
        <img
          style={{ display: imgdis }}
          class="imgpostpermbajtje"
          src={"http://localhost:8000/"+props.value['photo']}
        ></img>
        <video
          style={{ display: videodis }}
          class="imgpostpermbajtje"
          controls
         
          src={"http://localhost:8000/"+props.value['photo']}
        ></video>
      </div>
      <div class="postfotter">
        <img id="postfooterlike" src={Likebar}></img>
        <div class="div1">
          <p class="namefotter">{props.value['user']}</p>
          <p>{props.value['caption']}</p>
        </div>
      </div>
    </div>
   
  );
}
export default Post;
