import { useState,useEffect } from "react";
import "./Profiliimpostime.css"

function Profiliimpostime(props) {
  const [link, setlink] = useState(props.src);
  const [disimg, setDisimg] = useState("inline");
  const [disvideo, setDisVideo] = useState("");

  useEffect(()=>{

    if (link.includes("mp4")) {
      setDisVideo("inline");
      setDisimg("none");
    } else {
      setDisimg("inline");
        setDisVideo("none");
    }

  })

  return (
    <div  style={{width:320,background:"black", height:320, margin:2}} >
      <img style={{display:disimg}} src={link} ></img>
      <video style={{display:disvideo}} src={link} ></video>
      
    </div>
  );
}
export default Profiliimpostime;
