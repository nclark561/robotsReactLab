import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleRobotAdd}>
      <p>What is your new robot's name?</p>
      <input value={props.input} type="text" placeholder="name" onChange={props.handleInput} />
      <button>Create Robot</button>
    </form>
  );
};

export default Form;
