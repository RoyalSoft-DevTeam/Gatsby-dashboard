import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import logocom from "../../assets/images/logocom.png";
import axios from "axios";
import { registerRoute } from "../../utils/APIRoutes";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values.username);
    const { email, username, password, confirmPassword } = values;
    const { data } = await axios.post(registerRoute, {
      username,
      email,
      password,
      confirmPassword,
    });
    if (data.status === true) {
      console.log("SUCCESS");
      navigate("/");
    }
    if (data.status === false) {
      setErrors(data.errors);
      console.log(data);
      console.log(errors);
    }
    // if (handleValidation()) {
    //     const { email, username, password } = values;
    //     const { data } = await axios.post(registerRoute, {
    //     username,
    //     email,
    //     password,
    //     });

    //     if (data.status === false) {
    //     toast.error(data.msg, toastOptions);
    //     }
    //     if (data.status === true) {
    //     localStorage.setItem(
    //         process.env.REACT_APP_LOCALHOST_KEY,
    //         JSON.stringify(data.user)
    //     );
    //     navigate("/");
    //     }
    // }
  };
  return (
    <>
      <FormContainer style={{ margin: "-8px" }}>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={logocom} alt="logo" />
            <h1>Champlain</h1>
          </div>
          {errors && (
            <div>
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {errors ? errors : ""}
              </p>
            </div>
          )}
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <div style={{ paddingLeft: "115px" }}>
            <button type="submit">Create User</button>
          </div>

          <span style={{ textAlign: "center" }}>
            Already have an account ? <Link to="/auth/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
};
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;
