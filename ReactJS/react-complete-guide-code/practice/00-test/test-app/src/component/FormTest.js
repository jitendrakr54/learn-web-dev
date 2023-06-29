import React, { useEffect, useRef, useState } from "react";

const FormTest = () => {
  const inputRef = useRef(null);

  const [addressIsVisible, setAddressIsVisible] = useState(false);
  const [name, setName] = useState("Jitendra");

  const buttonClickHandler = () => {
    setAddressIsVisible((prev) => !prev);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form data: ", event.target[0].value);
    console.log("Form data: ", event.target.email.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
          ref={inputRef}
          // autoFocus
          required
        />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="address1">Address1: </label>
        <input id="address1" type="text" required />
        <button
          type="button"
          className="form-address_button"
          onClick={buttonClickHandler}
        >
          Click to add Address2
        </button>
        {addressIsVisible && (
          <>
            <label htmlFor="address2">Address2: </label>
            <input id="address2" type="text" required />
          </>
        )}
        <label htmlFor="cars">Choose a Language:</label>
        <select id="langs" name="langs">
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
          <option value="kannada">Kannada</option>
          <option value="telugu">Telugu</option>
        </select>
        {/* <button className="form-submit_button">Submit</button> */}
        <input type="submit" className="form-submit_button" />
      </form>
    </>
  );
};

export default FormTest;
