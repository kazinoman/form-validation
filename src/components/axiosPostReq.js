import React, { useState } from "react";
import axios from "axios";

const apiEndPoint = "https://jsonplaceholder.typicode.com/";

const AxiosPostReq = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const postData = async (e) => {
    e.preventDefault();
    // console.log(name, email);
    try {
      const res = await axios.post(
        apiEndPoint + "posts",
        { name, email },
        {
          headers: {
            my: "custom headers ",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log("myerror" + error);
    }
  };

  return (
    <form
      style={{
        margin: "auto",
        textAlign: "center",
        width: "80%",
      }}
      onSubmit={postData}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#6845d5",
            color: "#fff",
            padding: ".5rem",
          }}
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default AxiosPostReq;
