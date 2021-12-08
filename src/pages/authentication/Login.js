import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import validate from "./validateLogin";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

function Login() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const { loginErrorMessage } = useAuthContext();

  return (
    <main className="authenticate">
      <h1 className="authenticate__title">Login to your account</h1>

      <p className="authenticate__error">{loginErrorMessage}</p>

      <form className="authenticate__form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          fullWidth
          margin="normal"
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
          fullWidth
          margin="normal"
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
