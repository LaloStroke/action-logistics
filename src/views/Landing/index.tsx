import React, { useEffect } from "react";
import Button from "../../components/Button";
import { useLoginMutation } from "../../store/services/userService";
import useForm from "../../hooks/useForm/useForm";
import { formFields, loginValidations } from "../../constants/login";
import Form from "../../components/Form";
import { useNavigate } from "react-router";
import "./landing.css";

const Landing: React.FC = (): JSX.Element => {
  const [login, { isError, isSuccess, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const { handleChange, handleSubmit, formValues, formErrors } = useForm(
    {
      email: "",
      password: ""
    },
    loginValidations,
    login
  );

  useEffect((): void => {
    if (isError) {
      navigate("/Home");
    }
  }, [isError]);

  return (
    <div className="h-screen grid place-items-center ">
      {isError && <div>Something went wrong</div>}
      {isLoading && <div>Loading...</div>}
      <div className="login">
        <h1 className="font-bold row-span-1 text-4xl text-center">
          Action Logistics
        </h1>
        <div className="row-span-2">
          <Form
            formFields={formFields}
            formErrors={formErrors}
            handleChange={handleChange}
            formData={formValues}
            onSubmit={handleSubmit}
          />
        </div>
        <Button type="primary" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Landing;
