import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../context/authContext";

const useForm = (validate) => {
  const { login, register, loginFailure, registerFailure } = useAuthContext();
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && values.password.length > 0) {
      const { name, email, password } = values;

      // login
      if (name === "") {
        login({ email, password });

        if (loginFailure || loginFailure === undefined) {
          return;
        }

        navigate("/home");
        setValues(initialState);
        return;
      }

      // register
      register({ name, email, password });

      if (registerFailure || registerFailure === undefined) {
        return;
      }

      navigate("/home");
      setValues(initialState);
    }

    // eslint-disable-next-line
  }, [errors, loginFailure, registerFailure]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default useForm;
