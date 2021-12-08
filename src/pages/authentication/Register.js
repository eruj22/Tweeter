import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import validate from "./validateRegister";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

function Register() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const { registerErrorMessage } = useAuthContext();

  const newRegisterErrorMessage = registerErrorMessage.includes(
    "duplicate key error"
  )
    ? "Email already in use"
    : registerErrorMessage;

  return (
    <main className="authenticate">
      <h1 className="authenticate__title">Create your account</h1>

      <p className="authenticate__error">{newRegisterErrorMessage}</p>

      <form className="authenticate__form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          fullWidth
          margin="normal"
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
        <TextField
          label="Repeat password"
          variant="outlined"
          type="password"
          name="passwordRepeat"
          fullWidth
          margin="normal"
          error={errors.passwordRepeat && true}
          helperText={errors.passwordRepeat}
          value={values.passwordRepeat}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      <p className="authenticate__link">
        Already have an account? <Link to="/login">Login instead</Link>
      </p>
    </main>
  );
}

export default Register;
