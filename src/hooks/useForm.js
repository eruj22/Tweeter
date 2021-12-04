import { useState, useEffect } from "react";

const useForm = (validate) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

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
      console.log("submit");
      console.log(values);
      setValues(initialState);
    }

    // eslint-disable-next-line
  }, [errors]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default useForm;
