import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    alert(`name: ${name}, gender: ${gender}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        name : 
        <input type="text" value={name} onChange={handleChangeName}/>
      </label>

      <br />

      <label>
        gender : 
        <select value={gender} onChange={handleChangeGender}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
      
      <button type="submit">submit</button>
    </form>
  );
}

export default SignUp;