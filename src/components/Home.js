import { useState } from "react";
function Home() {
  const [file, setFile] = useState();
  const [data, setdata] = useState([
    "http://localhost:8000/products/33URWCj9E5esBaw98zHdB5ijdBW99e7PP2I3zBfo.mp4",
    "http://localhost:8000/products/MjaMj5zRAvEI0jTHKLEk9s38Hs3pXgIGjlCyym6Q.jpg",
  ]);

  const submit = (e) => {
    e.preventDefault();
    const Form = new FormData();
    Form.append("file", file);
    console.log(Form);
    fetch("http://localhost:8000/api/rregjistroo", {
      method: "POST",

      body: Form,
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        ></input>
        <input type="submit"></input>
      </form>
      {file && (
        <img src={URL.createObjectURL(file)} alt="Selected File" />
      )}
    </div>
  );
}
export default Home;
