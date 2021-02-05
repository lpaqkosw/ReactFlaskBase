import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function App() {
  //state초기화
  const [data, setData] = useState("");
  const [dataEx, setDataEx] = useState("");

  //localhost:5000에 요청하는 함수. 버튼 클릭시 실행
  const fetchData = () => {
    if (data === "") {
      fetch("http://localhost:5000/")
        .then((response) => response.json())
        .then((fetched) => {
          //요청해서 받아온 데이터는 'data' state에 저장
          setData(JSON.stringify(fetched));
        });
    } else {
      setData("");
    }
  };

  //localhost:5000/ex에 요청하는 함수. 버튼 클릭시 실행
  const fetchFromEx = () => {
    if (dataEx === "") {
      fetch("http://localhost:5000/ex")
        .then((response) => response.json())
        .then((fetched) => {
          //요청해서 받아온 데이터는 'dataEx' state에 저장
          setDataEx(JSON.stringify(fetched));
        });
    } else {
      setDataEx("");
    }
  };

  //componentDidMount == useEffect()
  //render되기전에 데이터를 미리 가져오기
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((fetched) => {
        //요청해서 받아온 데이터는 'data' state에 저장
        setData(JSON.stringify(fetched));
      });
  }, []);

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={() => fetchData()}>
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
