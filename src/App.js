import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "./App.css";
import Nav from "./components/nav";
import Title from "./components/Title";
import AxiosPostReq from "./components/axiosPostReq";
import { getPosts } from "./service/postService";
import MuiForm from "./components/MuiForm";

const apiEndPoint = "https://jsonplaceholder.typicode.com/";

function App() {
  const [getData, setGetData] = useState([]);
  const [getPost, setPost] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get(apiEndPoint + "posts");
      setGetData(res.data);
      // console.log(res);
    } catch (error) {
      console.log(error);
      console.log("error is happen ...");
    }
    console.log("data from api");
  };

  const posts = async () => {
    const res = await getPosts();
    console.log(res.data);
    return res.data;
  };

  useEffect(() => {
    getApiData();
    posts();

    // const res = getPosts();
    // console.log(res.data);
  }, []);

  return (
    <div className="App">
      <Title />
      <Nav />
      <h1>Hello</h1>
      <AxiosPostReq />
      <MuiForm />
    </div>
  );
}

export default App;
