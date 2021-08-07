import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import styled from "styled-components";

const TextField = styled.input.attrs({ type: "text" })`
  background: transparent;
  border-radius: 3px;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const SubmitButton = styled.input.attrs({ type: "submit" })`
  background: transparent;
  border-radius: 3px;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ text }) => {
    if (!text) return alert("Empty!");

    const res = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/comprehend`,
      {
        textData: text,
      }
    );
    console.log(res);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("text")} />
        {/* <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select> */}
        <SubmitButton type="submit" />
      </form>
    </div>
  );
};

export default App;
