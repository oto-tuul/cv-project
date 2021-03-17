import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

function General() {
  const [inputs, setInputs] = useState({
    name: 'a',
    email: 'b',
    phone: 'c',
    linkedin: 'd',
  });

  const [showForm, setShowForm] = useState(true);

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleDisplayType();
  }

  function toggleDisplayType() {
    setShowForm((prevState) => !prevState);
  }

  function displayForm() {
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Yushud Hireme"
          value={inputs.name}
          onChange={handleChange}
        ></input>
        <input
          name="email"
          placeholder="yushud.hireme@yemail.gg"
          value={inputs.email}
          onChange={handleChange}
        ></input>
        <input
          name="phone"
          placeholder="+911 42069111"
          value={inputs.phone}
          onChange={handleChange}
        ></input>
        <input
          name="linkedin"
          placeholder="www.linkedin.com/in/yushud-hireme-3g6142183/"
          value={inputs.linkedin}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    );
  }

  function displayText() {
    render(
      <div>
        <p>{inputs.name}</p>
        <p>{inputs.email}</p>
        <p>{inputs.phone}</p>
        <p>{inputs.linkedin}</p>
      </div>
    );
  }

  // useEffect(() => {
  //   return displayForm();
  // }, []);

  return (
    <div className="General">{showForm ? displayForm() : displayText()}</div>
  );
}

export default General;
