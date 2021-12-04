import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import validate from "../utils/validateLogin";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";

function Login() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <main className="authenticate">
      <h1 className="authenticate__title">Login to your account</h1>

      <form className="authenticate__form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          error={errors.name && true}
          helperText={errors.name}
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          error={errors.email && true}
          helperText={errors.email}
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          error={errors.password && true}
          helperText={errors.password}
          value={values.password}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      <p className="authenticate__link">
        Don't have an account? <Link to="/register">Register instead</Link>
      </p>
    </main>
  );
}

export default Login;
