import "./Editprofile.css";
import { useState, useEffect, useRef } from "react";
import Anash from "./Anash";

function Editprofile() {
  const inputt = useRef(null);
  const nxjerr = (d) => {
    if (
      d["profil"].includes("product") &&
      d["profil"].includes("8000") == false
    ) {
      setImg("http://localhost:8000/" + d["profil"]);
    } else {
      setImg(d["profil"]);
    }

    setPassword(d["pass"]);
    setEmail(d["email"]);
    setuser(d["user"]);
    setnamep(d["emri"]);
    setSell(d["gjendje"]);
    setBio(d["caption"]);
    setID(d["id"]);
    setSell(d["gjendje"]);
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/editprof")
      .then((r) => r.json())
      .then((d) => nxjerr(d));
  }, []);

  const [img, setImg] = useState("");
  const [password, setPassword] = useState("password");
  const [email, setEmail] = useState("EEmail");
  const [user, setuser] = useState("Isernmae");
  const [namep, setnamep] = useState("name");
  const [bio, setBio] = useState("BIO");
  const [id, setID] = useState("");
  const [name, setName] = useState([
    "Professional Account",
    "Change password",
    "Apps and website",
    "Emails and nofications",
    "Push notifications",
    "Managa contancts",
    "Privacy and secyrity",
    "Ads",
    "Supervision",
    "Login activity",
    "Emails from intagram",
    "Help",
    "",
  ]);
  const [selected, setSell] = useState("0");

  const setselect = (e) => {
    setSell(e.target.value);
    console.log(e.target.value);
  };
  const send = (e) => {
    console.log("file " + file);
    e.preventDefault();
    const data = new FormData();
    if (file === "g") {
      data.append("email", email);
      data.append("emri", namep);
      data.append("user", user);
      data.append("pass", password);
      data.append("id", id);
      data.append("profil", img);
      data.append("bio", bio);
      data.append("type", "0");
      data.append("gjendje", selected);
    } else {
      data.append("email", email);
      data.append("emri", namep);
      data.append("user", user);
      data.append("pass", password);
      data.append("id", id);
      data.append("profil", file);
      data.append("type", "1");
      data.append("bio", bio);
      data.append("gjendje", selected);
    }

    fetch("http://localhost:8000/api/updateprofil", {
      body: data,
      method: "POST",
    })
      .then((r) => r.json())
      .then((d) => {
        if (d["proces"] === "done") {
          window.location.href = window.location.href;
        }
      });
  };
  const [file, setFile] = useState("g");

  return (
    <div>
      <Anash />
      <div class="editprofilecont">
        <div class="editprof1">
          <div class="editcon1">
            <img
              class="editcon1img"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
            ></img>
            <h6 style={{ marginLeft: 17 }}>Some account settings are moving</h6>
            <p>
              Soon, Accounts Center will be the primary place to manage your
              account info, settings and experiences across Meta technologies
              like Facebook and Instagram.
            </p>
            <p id="lemore">Learn More</p>
          </div>

          <div class="editcon3">
            <div class="editcon11">
              <img id="imgcont3" src={img}></img>
              <p id="user111">{user}</p>
              <p onClick={() => inputt.current.click()} id="Chngp">
                Change the profile photo
              </p>
              <input
                style={{ display: "none" }}
                ref={inputt}
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
              ></input>
            </div>
            <div class="nameedit">
              <p>
                <b>Name</b>
              </p>
              <input
                type="text"
                onChange={(e) => setnamep(e.target.value)}
                value={namep}
              ></input>
            </div>
            <div class="colandrow">
              <div class="row">
                <br></br>
                <br></br>
                <br></br>
                <p id="p1us1">
                  <b>Username</b>
                </p>
                <p id="bioedit">
                  <b>Bio</b>
                </p>
                <p id="emailedit">
                  <b>Email</b>
                </p>
                <p id="passwedit">
                  <b>Password</b>
                </p>
              </div>
              <div class="col">
                <br></br>
                <p id="p1">
                  Help people discover your account by using the name you're
                  known by: either your full name, nickname, or business name.
                  You can only change your name twice within 14 days.
                </p>
                <br></br>
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setuser(e.target.value)}
                  id="inppp1"
                ></input>
                <p id="p2">
                  In most cases, you'll be able to change your username back to
                  online.bookstore_albania for another 14 days. Learn more
                </p>
                <textarea
                  id="textareabio"
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <br></br>
                <br></br>
                <p id="p2">Personal information</p>
                <p id="p2">
                  Provide your personal information, even if the account is used
                  for a business, a pet or something else. This won't be a part
                  of your public profile.
                </p>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="inppemail"
                ></input>
                <br></br>
                <br></br>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="inppemail"
                ></input>
                <br></br>
                <br></br>
                <select
                  value={selected}
                  onChange={setselect}
                  class="form-select"
                >
                  <option value="0">Private</option>
                  <option value="1">Public</option>
                </select>
                <button onClick={(e) => send(e)} class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div class="editcon2">
            <br></br>
            <p>
              <b>Edit profile</b>
            </p>

            {name.map((m) => (
              <p>{m}</p>
            ))}
            <p style={{ color: "rgb(14, 158, 210)" }}>
              <b>Switch to personal account</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Editprofile;
