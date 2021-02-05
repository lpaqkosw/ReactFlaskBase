import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function App() {
  const [data, setData] = useState("");
  const [dataEx, setDataEx] = useState("");

  const fetchData = () => {
    if (data === "") {
      fetch("http://localhost:5000/")
        .then((response) => response.json())
        .then((fetched) => {
          setData(JSON.stringify(fetched));
        });
    } else {
      setData("");
    }
  };

  const fetchFromEx = () => {
    if (dataEx === "") {
      fetch("http://localhost:5000/ex")
        .then((response) => response.json())
        .then((fetched) => {
          setDataEx(JSON.stringify(fetched));
        });
    } else {
      setDataEx("");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          fetchData();
        }}
      >
        GetData
      </Button>
      <div>{data}</div>
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" onClick={() => fetchFromEx()}>
        /ex
      </Button>
      <div>{dataEx}</div>
    </div>
  );
}
