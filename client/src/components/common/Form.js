import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNameSubmitted(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChangeName} />
        </label>
        <button type="Submit">Submit</button>
      </form>

      <div>{name}</div>
      <div>{nameSubmitted}</div>
    </div>
  );
}
